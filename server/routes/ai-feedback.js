import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

const aiFeedbackRouter = express.Router();

aiFeedbackRouter.get('/', async (req, res) => {
  const age = req.query.age;
  const gender = req.query.gender;
  const breakfast = req.query.breakfast;
  const lunch = req.query.breakfast;
  const dinner = req.query.dinner;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content: `Hello. I am ${gender} and I am ${age} years old. How common is this?`,
      },
    ],
  });
  res.json(completion.data.choices[0].message.content);
});

export default aiFeedbackRouter;
