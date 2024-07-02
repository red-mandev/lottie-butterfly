# Critical Information
    Anton Andersen 28/01/1993
    Senior Full Stack Engineer
    Tinggården 5, 2030 Copenhagen, Capital Region, Denmark
    anton.masw@gmail.com
    https://www.linkedin.com/in/anton-andersen-41b2a9303/
    https://drive.google.com/file/d/1lvcrT3FKG9wI_oZ7dxn_M42n-TEt0fWM/view?usp=drive_link/
    45-81-77-90-08

# Behavior & Intro

## Introduce youself
    I'm a software engineer with 8 years of experience in professional software development. In my career, I had luck to work on world leading companies like Chainlink Labs and IBM iX. During these days, I have worked on various projects using different stacks.
    I also have many years of working on backend, using frameworks known for their best performance, Ruby on Rails and Rust, as well as node.js frameworks like Express.js.
    Even with all these multi-handed experience, there's a specialized expertise, that's React.
    I do think that, the ability led me to work on these various projects with different stacks, is my detail-oriented approach, my strength to adapt new situation and learn new technologies fast. I love challenges, I have even tried tetris with asm, and enjoy my job and work.

## Last role & Project
    My last project I worked on is a game NFT marketplace platform
    I worked on that project as a frontend and blockchain developer, developing frontend with React, GraphQL and Next.js
    As a frontend developer, I developed custom components with JavaScript, TailwindCSS in React and implemented state management using Redux
    And with my expertise in blockchain technologies, I developed smart contracts in solidity and unit test scripts based on Hardhat
    And as you know, internal use admin web application is necessary for that kind of platform, so I worked on that admin app with 2 more developers using React and Node.js

### backend - Rust
    My last project I worked on is a game NFT marketplace platform
    As a backend developer for an NFT marketplace, I utilized Rust to build high-performance, secure, and scalable microservices to handle transaction processing, user authentication, and data management. Leveraging Rust's strong typing system and memory safety features, I ensured robustness and reliability in handling sensitive user data and financial transactions. Implementing asynchronous programming with Rust's async/await syntax, I optimized resource utilization and responsiveness, crucial for real-time interactions in the marketplace.
    Also, Rust has tools and libraries that help connect to blockchain networks. This makes it easier to work with NFT smart contracts and transactions on the blockchain. Using Rust, I built a strong and efficient backend system that's really important for the NFT marketplace to work well.

### frontend - React
    As a frontend developer in an NFT marketplace, I utilized React with Next.js (we used TypeScript) for efficient rendering and seamless client-side routing. Leveraging Next SEO, I ensured optimal search engine visibility and crafted metadata for individual NFT pages, enhancing discoverability. Implementing responsive design principles, I ensured a consistent user experience across various devices, from desktop to mobile. With React's component-based architecture, I created reusable UI elements, streamlining development and maintaining code scalability. Through continuous integration and deployment pipelines, I facilitated rapid iteration and deployment cycles, enabling quick updates and improvements to the marketplace.
    http://ebisusbay.com

    As a senior developer, I collaborated with my teammates like other frontend developers, designers, and backend developers. And I sometimes discussed with the lead developer or project manager about my tasks or something related to my tasks such as the backend apis or what I have to do in the next sprint.
    I implemented data visualization with React/Redux/MUI and other technologies.

    http://tomb.com

    Daily responsibility

    Participating in Daily Standup Meetings
    Implementing Features and Bug Fixes defined in sprint
    Code Reviews and Documentation
    Continuous Integration and Deployment (CI/CD)

## Why did you leave your last position?
    Well, I always worked remotely but I need to get to the office every a few month

## Why are you interested in this position?

    Simply, your company is technology company and the mission is to integrate several services into one application. So your company creates server requests any time and provides real time information and updates.
    I'm really interested in your production and your site.
    In addition, your tech stacks caught my eyes. It's perfect chance to enhance my skills

## How can you afford as a team player

    Team players actively listen to their coworkers, respect ideas and aim to improve the product or process at hand. Team players understand that their team's success is their own success, and they share responsibility when their team experiences difficulties along the way.

## What is the most proud moment through career

    Total Trading Volume

## What do you enjoy in your software engineer?

    I enjoy my teams. I enjoy working with people, and I enjoy doing my own thing a little bit. Software engineering definitely allows you to do both and, depending on what kind of company you work at, allows you to do more of one or the other based on what you want. There's a lot of flexibility in that way, too.

## How do you contribute to the team?

    Help the team by using my strengths, clearly understanding my role, and staying flexible and reliable until the project is completed. Be positive, and help others as much as I can. By being cooperative and willing to work hard, I'll make a good impression on everyone – including my boss.

## Strength

    My greatest strengths include being goal-oriented, detail-oriented, a fast learner, and having a strong ability to work well in a team. These qualities enable me to stay focused on achieving objectives, pay close attention to important details, quickly adapt to new information or skills, and collaborate effectively with others to achieve collective goals.

## Weakness

    A potential weakness could be excessive detail orientation, as it may lead to spending too much time on tasks that don't necessitate such granularity. Balancing attention to detail with overall efficiency is vital to avoid potential delays in achieving broader objectives. It's crucial to prioritize tasks based on their overall impact and significance, considering the context at hand.

## Experience with mentoring people in your past jobs.

    In my previous role, I mentored junior developers on expanding skillsets in JS, React and Express. One memorable experience involved helping a junior developer understand advanced JavaScript concepts through one-on-one sessions. When expanding their React & Express skills, I usually sent feedback and constructive criticism about their code quality and structures. Their growth and collaborative environment were highlights of my mentoring experience, contributing to our team's success.

## Have you ever worked in a regulated environment? Anything that was under strict government by anybody.

    No, I have never worked in that environment. I worked at common startup companies so I have no experience with that.

## Applications architecture, about how the information flows from the user all the way across the multiple systems

    There are four main parts: User Interface (UI), frontend, backend, and third-party.
    Regarding information flow, users initially interact with the UI by entering data, clicking buttons, or performing other actions. The frontend captures these user interactions and then sends requests to the backend server based on the user's actions.

    The backend receives frontend requests and executes business logic, interacts with databases, or performs necessary computations. If the backend needs to communicate with a third-party server to obtain additional information, it sends a request to the third-party server and waits for a response. Or, the backend works asynchronously. This means that the backend doesn't wait for a response from the third-party server immediately.

    After finishing backend processing, the backend sends a response back to the frontend, which includes processing results - frontend necessary data in case of success or error data in case of failure. Finally, the frontend updates the UI using the response data and sends notifications to the users.

    For notification servers, I used Firebase Cloud Messaging(FCM).
    Regarding implementation, FCM provides its listener.
    FCM triggers events when its db is updated and the listener captures this updated event.
    This listener can be used both frontend & backend and in my last case, I implemented at frontend side.

## If you could change anything from your tech stack about this project, what would you change and why?

    If I could change anything from my tech stack about this project, I would change React to Vue. Because this is not a large project so Vue has higher performance versus React and also provides SSR as natively.

## Describe to me a time when you found an issue in production, how did you go about identifying the issue and fixing it?

    I discovered performance issues like too many API calls, involving large request payloads and responses, and unnecessary page reloading. To resolve this, I tested the code step by step, find out the problems, and fixed them using Redux. I consolidated the APIs to reduce the number of calls and restructured both the code and API calls to eliminate unnecessary requests.

## biggest challenge in your last project?

    In my last project, I tackled performance issues with the E-Commerce dashboard, particularly due to heavy data visualization. After investigating the issues, I focused on asset optimization and backend API upgrades to improve front-end response times. Implemented new algorithms for minifying files, lazy loading images, implementing infinite scroll, and utilizing caching techniques. These efforts significantly improved conversion rates.

## Your working style with other engineers, do you pair with them or they get a ticket assigned and go their own way?

    I find pair programming to be an effective way to share knowledge, brainstorm solutions, and catch potential issues early in the development process. I'm open to pairing with team members, especially for complex or critical tasks where collaboration can lead to better outcomes.
    Also I'm capable of independently taking ownership of assigned tickets and seeing them through to completion.

## Tell me about something you learned recently at work

    Recently, I am learning about the new technology-using chat gpt api. I chose to learn it because AI has been developed variously and rapidly.

## Any questions you might have?

Are most of the team people working EST hours or in different location?
Is this a new project or ongoing?

## What was the biggest challenge for you on mentoring other people?

    Finding the right level of difficulty and complexity for the JS or React projects and challenges that suit the mentee's current skills and learning goals is the biggest challenge. For this, I used test project requires various level of JS or React skills like a blog project.

## technical decision.

    One day, we needed to create a small project. At the start, we discussed the choice of frontend frameworks – Angular or React. I proposed React.

## How convince other people?

    I explained this project seems requiring lots of updating at client side and React has better updating speed vs Angular by using Virtual DOM while Angular uses Real DOM.
    Also React is one-way data binding so it can be easily tested.

## What would your prefer to be using.

    I'm an almost JavaScript and NodeJS developer so I prefer using JS & NodeJS related frameworks such as React, Express, Angular and so on.
    But I have some experiences in PHP like Laravel or Java like Spring Boot.
    However I'm an almost JavaScript developer.

## Why you choose fully remote position.

    Because this is good for my family. Onsite or hybrid jobs are kind of regular jobs so I have to follow the company's rule.
    But in case of remote position, I can choose the work time & plan. Also I can stay home more than other positions.
    That's why I choose remote position.

## Can you work in startup environment?

    Yes of course, my last company was Velou and that was a startup company but it was growing very fast. While working at that compmany, I learnt lots of things such as thriving on chanllenge or dynamic environment and had a track record of adaptability. As a result, I'm interested in collaboration and innovative cultures of startups and think I can contribute effectively in fast-paced settings.
