import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import { guide } from '../constants.js';

const aiFeedbackRouter = express.Router();

aiFeedbackRouter.get('/', async (req, res) => {
  let age = req.query.age;
  const gender = req.query.gender == 'U' ? 'F' : req.query.gender;
  const foods = req.query.foods;

  // why JS > TS totes
  if (age <= 50) {
    age = 'ageLow';
  } else if (age <= 70) {
    age = 'ageMed';
  } else {
    age = 'ageHigh';
  }

  const recs = [];

  // positive means too much, negative means too little
  const diffs = {
    vegetable: foods.vegetable - guide[gender][age].vegetable,
    fruit: foods.fruit - guide[gender][age].fruit,
    grain: foods.grain - guide[gender][age].grain,
    meat: foods.meat - guide[gender][age].meat,
    dairy: foods.dairy - guide[gender][age].dairy,
  };

  // all the diffs in descending order of magnitude
  const sortedDiffs = [];
  Object.keys(diffs).forEach((key) => {
    sortedDiffs.push([key, diffs[key]]);
  });
  sortedDiffs.sort((a, b) => Math.abs(a[1]) - Math.abs(b[1]));

  // converting diffs to chat text. difference of 0 is ignored.
  for (const diff of sortedDiffs) {
    if (diff[1] < 0) {
      recs.push(diff[0] + ' deficit of ' + (Math.abs(diff[1]) + ` servings`));
    } else if (diff[1] > 0) {
      recs.push(diff[0] + ' surplus of ' + (Math.abs(diff[1]) + ` servings`));
    }
  }

  if (recs.length == 0) {
    res.json('Your diet completely matches the recommendations!');
    return;
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are an AI assistant with a friendly attitude who gives tips on achieving a balanced diet based on the user's surpluses and deficits. Greet the user and explain your purpose. Give 2 single sentence tips to help the user achieve a balanced diet. The user has a ${recs[0]} and a ${recs[1]}. Surpluses should be reduced and deficits should be increased.`,
      },
    ],
  });
  res.json(completion.data.choices[0].message.content);
});

export default aiFeedbackRouter;
