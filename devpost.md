## Inspiration

<img src="https://static01.nyt.com/images/2016/08/11/well/well_nutritionforrunners_gif/well_nutritionforrunners_gif-jumbo-v5.gif"  width="400">
<p>
Eating from all the main food groups is something we learn when we’re very young; however, when it comes to healthy eating, only a small proportion of the population actually follows the advice given by health professionals and dietitians.
 </p>
 <ol>
  <li>In 2017-18, just over half (51.3%) of Australians aged 18 years and over met the guidelines for the - recommended daily serves of fruit (2 or more serves).</li>
  <li>One in thirteen (7.5%) adults met the guidelines for serves of vegetables (5-6 or more serves for men depending on age, and 5 or more for women).</li>
  <li>The Australian Institute of Health and Welfare reported last year that 6.1% of adults ate the recommended amount of both fruit and vegetables</li>
  <li>Furthermore, less than half of all Australian adults get their recommended daily intake of calcium.</li>
</ol>

We saw a gap in the education and awareness in eating well and hence built Balanced Bites to target this gap in the market. We framed our decisions around the United Nation's sustainabilioty goals Education and Health
![UN Sustainable Development Goals](https://www.accessnow.org/cms/assets/uploads/2017/06/UNSustainableDevelopmentGoals_Brand-01-e1581356074445.jpg)

| Clean Energy | Quality Education | Responsible Consumption |
| --------------- | ----------------- |------------------------------|
| [![3. Good Helath and Well-Being](https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2018/05/E_SDG-goals_icons-individual-rgb-03.png?resize=240%2C240)](https://www.un.org/sustainabledevelopment/energy/) | [![4. Responsible Consumption & Production](https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2018/05/E_SDG-goals_icons-individual-rgb-04.png?resize=240%2C240)](https://www.un.org/sustainabledevelopment/sustainable-consumption-production/) | [![12. Responsible Consumption](https://i0.wp.com/www.un.org/sustainabledevelopment/wp-content/uploads/2018/05/E_SDG-goals_icons-individual-rgb-12.png?resize=240%2C240)](https://www.un.org/sustainabledevelopment/climate-change/) |
| - TODO<br/>- TODO  | - TODO<br/>-TODO | - TODO<br/>- TODO |

## What it does

![Landing](https://github.com/UNIHACK2023/UNIHACK-23/blob/main/landing.gif)

BalancedBites is a gut biome visualiser that gives users a snapshot of everything that they've eaten in a day. Our website interface is easy to use, and it takes less than a minute to record your information and generate a bubble map of your food intake. The goal is to eat a diverse variety of foods across the different food groups

## How we built it

<img src="https://media.tenor.com/PwEIXSJWhsQAAAAd/build-lego.gif"  width="400">

### 1. Brainstorming 🧠

We wanted our app to make a positive impact on the lives of people in our community so we framed our brainstorming with Human Centred Design practices.

// IMAGE WHITEBOARDS?

### 2. Research 🧪

We wanted our app Balanced Bites to be credible and scientifically backed and we tasked our to find suggested food intakes for each. To inform our design we further researched

### 3. Wireframing & Prototyping ✏️

To effectively communicate to all our engineers the plan of what was to be built

We initially mapped out our userflow on a white board. The design of our app is fun and funky and inspired by a neobrutalist aesthetic.

### 4. Development 💻

The app is built in Typescript with Vite, React and OpenAI APIs.

## Challenges we ran into

In utilising the OpenAI API, we realised that we couldn't implement all the logic on the frontend because our API key would be exposed, even if we don't directly expose our .env data. This was a mandatory security precaution that we had to follow. As such, a backend had to be created and deployed as well. Fortunately, deployment trivial through the use of Railway. The greater issue was just dealing with the extra complexity and bugs/blockers that came with having to manage a backend as well.

Another challenge we noticed with this Hackathon was the act of balancing error mitigation agains the limited time we had. For example, taking the time to set up error loggers and setting up proper dev vs prod environments. For the most part, we tried to invest the least time for the best safety and programming experience we could achieve.

## Accomplishments that we're proud of

<img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f55a3054259101.5953e4f53ef53.gif"  width="400">

We're immensely proud of Balanced Bites that aims to make a tangible positive impact by raising awareness on healthy eating.
We are super proud of how far we've come in only 48 hours! We were able to get the app completely functional and deployed!

## What we learned

We learnt that is is very important to communicate regularly with all the members what we will be doing to optimise our different skills

## What's next for Balanced Bites

<img src="https://cdn.dribbble.com/users/160641/screenshots/14477570/media/89b37143200c0a153e6b16441b021be1.gif
"  width="400">

We aim to incentivise continued use of the Balanced Bite app through implenting a calendar feature where user can see a visualisation of their food intake on a calendar. We recognise eating is a very social activity and could love to extend Balanced Bite to to include community features such as leaderboards see how your eating habits are faring compared to your friend and forums to share recipes.
