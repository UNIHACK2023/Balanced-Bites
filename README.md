# Balanced Bites

## Development

In the client directory

```
npm install
```

To run

```
npm run dev
```

## Inspiration

<img src="https://static01.nyt.com/images/2016/08/11/well/well_nutritionforrunners_gif/well_nutritionforrunners_gif-jumbo-v5.gif"  width="400">

<p>
Eating from all the main food groups is something we learn when we’re very young; however, when it comes to healthy eating, only a small proportion of the population follows the advice given by health professionals and dietitians.
 </p>
 <ol>
  <li>In 2017-18, just over half (51.3%) of Australians aged 18 years and over met the guidelines for the - recommended daily serves of fruit (2 or more serves).</li>
  <li>One in thirteen (7.5%) adults met the guidelines for serves of vegetables (5-6 or more serves for men depending on age, and 5 or more for women).</li>
  <li>The Australian Institute of Health and Welfare reported last year that 6.1% of adults ate the recommended amount of both fruit and vegetables.</li>
  <li>Furthermore, less than half of all Australian adults get their recommended daily intake of calcium.</li>
</ol>

When it comes to healthy eating, we found that there was a general lack of awareness surrounding the requirements for a balanced diet. We built Balanced Bites to target this gap in the market. We framed our decisions around the United Nations’ sustainability goals; #3 Good Health and Wellbeing, #4 Quality Education and #12 Responsible Consumption.

## What it does

![Landing](https://github.com/UNIHACK2023/UNIHACK-23/blob/main/landing.gif)

Balanced Bites is a gut biome visualiser that gives users a snapshot of everything that they've eaten in a day. Our website interface is easy to use, and it takes less than a minute to record your information and generate a bubble map of your food intake. The goal is to encourage the user to eat a diverse variety of foods across the different food groups and educate them on the recommended servings.

## How we built it

<img src="https://media.tenor.com/PwEIXSJWhsQAAAAd/build-lego.gif"  width="400">

### 1. Brainstorming 🧠

We wanted our app to make a positive impact on the lives of people in our community so we framed our brainstorming with Human Centered Design practices. We brainstormed issues which affect people and were able to narrow our options down to healthy eating. We further considered the experiences of a broad range of user demographics, to ensure that our project would be suited towards a diverse user base. Ultimately, we wanted to build an app that was fun, informative and had real-world impact.

### 2. Research 🧪

Our goal was for Balanced Bites to be credible and scientifically backed. We tasked our analysts with finding suggested food intakes for various demographics, and scientific tips to improve one's diet. To inform our design, we further researched competitor apps in the market to see what could be improved and what features were helpful to include, and came up with our requirements list.

### 3. Wireframing & Prototyping ✏️

To effectively communicate to all our engineers the plan of what was to be built, we needed to have a clear vision of the app. We initially mapped out our user flow on a whiteboard and then created higher fidelity prototypes on Figma. The design of our app is fun and funky and inspired by a neo-brutalist aesthetic.

### 4. Development 💻

The app is built in Typescript with Vite, React and OpenAI APIs. The frontend is styled with MUI, emotion and A LOT of custom css to improve the responsibility of the app. The backend server that fetches from OpenAI APIs is written in JavaScript and runs on Express, wrangling data from the frontend to convert into a prompt for the AI to respond to.

We used React Router to handle the user navigation creating a landing page which would introduce the user to our website showcasing the innovative gut biome diversity visualiser which features real data from the Australian Department of Health. This graph was created using the Highcharts graphing library and building on the packed bubble chart design.

The user is guided to the next pages where they can enter information regarding their servings of each food type for breakfast, lunch, and dinner. These pages feature a large common codebase which we moved to a dedicated file. We used custom icons for each meal type along with info popups to clarify which foods fall into which category. This data is saved in localStorage each day with the potential to be linked to a user account in future.

Once we have collected the meal data we optionally accept specific user information to further customize our ChatGPT AI driven insights. The results page is split into two sections showing both the detailed breakdown of consumption and recommended guidelines and AI suggestions along with a customized chart. This chart can be shared to social media.

## Challenges we ran into

In using the OpenAI API, we realized that we couldn't implement all the logic on the frontend because our API key would be exposed, even if we don't directly expose our .env data. This was a mandatory security precaution that we had to follow. As such, a backend had to be created and deployed as well. Fortunately, the use of Railway made deployment much more straightforward. The main issue was dealing with the extra complexity and bugs/blockers that came along with managing a backend.

Another challenge we noticed was the act of balancing error mitigation, especially because of the time constraints. For example, taking the time to set up error loggers and setting up proper dev vs prod environments. For the most part, we tried to invest the least time for the best safety and programming experience we could achieve.

## Accomplishments that we're proud of

<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f55a3054259101.5953e4f53ef53.gif"  width="400">

We're immensely proud of Balanced Bites, and aim to make a positive impact by raising awareness regarding healthy eating.
We are super proud of how far we've come in only 48 hours, since we were able to get the app completely functional and deployed!

We're very happy with how Balanced Bites ended up looking with all the effort we took in structuring and styling the pages and their individual components. We are especially proud of how the animated food group visualization turned out as it was just as exciting and dynamic as we had envisioned and we think it adds a lot to the site's appeal.

We're also proud of our substantial interfacing with the wider community, having done research to learn what constitutes a balanced diet in terms of servings. We also integrated external APIs like the OpenAI API as a way to make even more use of the data we collected, both from trustworthy sources and from the user of Balanced Bites, and wrangle and convert it into a useful prompt to feed to the AI.

## What we learned

As our team has a wide variety of skill sets, we learnt that it was very important to leverage these differences. This strategy, alongside effective and regular communication, allowed us to work efficiently and meant the project could be fully deployed on time.

We learnt about the cost of running services and the importance of keeping efficiency in mind. We had budget limits for both our frontend/backend hosting services as well as the OpenAI API. The OpenAI API specifically provides different models and output options that are more or less efficient in the amount of tokens they consume. This was a small consideration because the quota was plentiful, but it was good practice to have considered it anyway.

## What's next for Balanced Bites

![](https://cdn.dribbble.com/users/160641/screenshots/14477570/media/89b37143200c0a153e6b16441b021be1.gif)

We aim to incentivise continued use of the Balanced Bite app through implementing a calendar feature where users can see a visualization of their food intake on a weekly planner. We recognise eating is a very social activity and would love to extend Balanced Bite to to include community features such as leaderboards and recipe sharing forums. This would allow the user to compare their eating habits with friends, and further promote healthy eating through recipe sharing.
