![alt text](https://cdn.glitch.com/9d50421d-0dee-4efc-8f0a-51d50515a54b%2Fteam2-logo.png?v=1561414377429)
# SQA-Nov-2021-Team2
SQA module November 2021 - Team 2

Within this project assignment, we are to present a simple but well-tested project.
Our project is based around Ciphers, both encrypting and decrypting. With clear, testable logic involved with such a converter, we have proceeded with multiple ciphers, including Caesar & Vigenere. 

## Live App:
[Cipher App](https://cipher.kierancaruana.com/ "Cipher app")

## Testing Repo:
[Cipher App Testing](https://github.com/RandomEDP/sqa-nov-2021-team2-Testing "Cipher app testing")

## Teams Jira:
[Jira Backlog](https://lgim-ada.atlassian.net/jira/software/projects/SA1/boards/1/roadmap "Jira Backlog")

## Team Roles & Responsibilities

| Person        | Role          | Responsibility            |
| ------------- |:-------------:| -------------:|
| William Fifield      | PM - Tester | Manage SCRUM meetings, Create tickets aligned with requirements, test against requirements |
| Kieran Caruana      | Developer      |   Build and deploy working application |
| Ethan Davison-Pearce | Developer - Tester      |    Build and deploy working application, test against requirements |

We're working on an Agile SCRUM methodology, of which is what we are familiar with at our workplace. Due to working with a small timeframe, we are using more ad-hoc measures to allow for better management between the assignment work and official work. With our roles, we take on different sets or responsibilities, but all take part and help one-another if issues arise. This works within the Agile methodology, working against blockers as a team, and building the application without any stop in progress. 

## SQA Strategy v.1

### Agile Scrum Processes
#### Ceremonies
Within the team, we have regular meetings talking about issues and blockers in the project. This helps the development of the project, due to not having a lot of time. Working Agile, we've sped up the process of planning and reviews to fit within the time frame, but are able to use these communication methods to progress business requirements of the team, the development, testing and deployment.

The project manager (PM) for the team will work as the business analyst, studying the requirements and goals that the client needs, and breaks these down into "Stories". These tasks are discussed with the other developers and testers to ensure that the story isn't too broad, and then it is assigned to the person who will be working on it. Using the project management tool JIRA, we can easily create these tickets and assign each team member to their respective tasks.

During ceremonies, we discussed what work we would be working on, and if there were any issues or blockers in the work. This highlighted issues as we went along, such as compatability issues with end-to-end testing. We use this time to discuss and offer help to those blocked to help the project progress.

These meetings were done ad-hoc, as working on this project along-side other official work means team members are less available on certain days, with a similar path with the retrospective. These are held when issues arise to allow other members to help with issues or bugs that the application is facing in a feature. The retrospective meetings are being held until the penultimate week, and then again on the submission week.

#### Retrospectives
Retrospective on 09/12/2021. The meeting notes are as followed:

- Tickets were clear, but some had to be broken down more during the sprint as the work was underestimated,
- The end-to-end testing system we need to use is outside our main repo, need to ask Katia if this will work in accordance to the assignment.
- Integration testing in AWS still needs to be worked on, this will be done in the following days.
- Ad-hoc stand-ups work well, where every member is free to jump on a call and discuss any issues with any particular ticket being worked on.
- Positive notes around PRs, where there's always someone to review and make comments to coincide with our coding standards, the ticketed work, and the PR review rules. 


Retrospective on 12/12/2021. The meeting notes are as followed:

- Tickets are better paced and broken down enough as we lead up to the last days of the project,
- The end-to-end testing system we had a problem with has been resolved talking to Katia, and can be done and linked in the main application readme.
- Final work takes place on the 14/12/2021, with test deployment already in play,
- Integration testing in AWS has minor issues, but can be resolved for Tuesday full deployment.




### PR Review Rules
- PR is going into the development branch, not to mess with the main branch.
- PR needs to be resolved quickly, either with comments to amend or pulled into the development branch.
- PR isn't too long, with few files changed/submitted to allow for an easier and quicker review.
- Coding standards are upheld (refer to lower in this document).
- PR cannot be approved and merged by the same person that created the PR. 

### Definition of Done
The definition is done is a clear checklist for completing user stories within projects. The term "done" means that the particular feature has been developed, fully tested and meets the requirements for the story. A clear test for this is by asking the question: "Would the customer be happy with this being deployed?".

- Unit tests passed,
- Code reviewed,
- Functional tests with QA are passed,
- Issues detected during QA are resolved,
- Non-functional UAT testing requirements met,
- Issues detected during UAT are resolved,
- Blockers, critical and major bugs are fixed,
- Acceptance criteria met,
- Product Owner accepts the user story,

### Types of testing this team will be using

Within this module, the key focus is around the testing strategy, confirming that the application is fully covered with different types of testing. Using these different types of testing allows us to confirm at multiple layers that key functionality of the application is working. Having testing standards upheld is key for working in an Agile environment, as the testing is passed onto key "testers" of which their role is to check the app, and if it doesn't work as required, then to pass it back to the developers.

The types of testing we will be utilizing within our application are:
- Static Testing - We use PR's to ensure that coding standards are upheld, checking for common mistakes and possible bugs, as well as commenting on potential of refactoring. This is done both by the developer and the person(s) reviewing the code.
- Unit Testing - Isolating functionality within the code to ensure it works and behaves the way it is designed will enable the entire application to work when put together. Doing this whilst developing is known as TDD, which is helpful when building applications about conversion.
  - TDD is used in part with this application, with basic "Caesar Cipher" testing done whilst the functionality was being built.
  - The other unit tests in this application were written after development, when in QA.
- Integration Testing - AWS build is triggered when a new merge is completed into main on GitHub. AWS Amplify then starts the build process on an EC2 instance on AWS, it runs the tests in the code to verify there is no errors that made its way to main, if they pass it then builds a production image which is then deployed to the EC2 instance and is hosted on a custom domain run via Cloudflare and AWS Route53.
- End-to-End Testing - Protractor is a wrapper around Selenium Webdriver that provides an automation test framework which simulates user interaction (UI) with an Angular web application for a range of browsers and mobile devices. It provides all features of Selenium WebDriver along with Angular specific features for seamless end-to-end testing.
- Manual Testing - This will follow a testing plan, where different scenarios are tested within the application to see if it is capable of following typical user paths. This type of testing is good to be done last, as it utilizes the final deployed test application.

### Coding Standards
These are a basic set of rules that developers and testers must follow when working on this project. These are typically very basic things, but dramatically effect the use and readability when adding more features to the application, and when testing.

Please refer to the below standards:
- Classes must be created with Pascal Casing (e.g. ExampleClass),
- Variables must be created with Camel Casing (e.g. exampleVariable),
- Variables must be given clear name, rather that a random assignment name (e.g. don't: "d"; do: "decryptedText"),
- There must not be more than one statement per line,
- Code line should not go over 100 characters,
- Test classes must include the word "Test" and the end of the class name, unless required otherwise,
- Do not use 'static' methods or fields,
- Do not ignore exceptions that are expected to be caught,
- Be specific when using exceptions, rather than just use 'Exception',
- Each new file has a description comment, explaining what the file is doing,
- Braces must be used in logic statements (if, else, for, do and while) even if the body is empty,
- Empty blocks can be put into one line,
- Ensure indentation of brackets is formatted with no gaps,
- Ensure white space is left when logic checking (e.g. don't:(i>10); do:(i > 10)),
- One variable set per declaration,
- Do not leave old code in comments, just remove as this can be found in the repo history,
- No use of 'Global' variables.

Not everything is covered in coding standards, and these standards can be updated at any time if a new clear standard needs to be met. During a code review these should be checked, as well as any potential new standards that haven't been listed above.


## Test Plans

### Scope
This application will be able to encrypt and decrypt using 2 basic ciphers, Caesar and Vigenere. Within these test plans we can target our tests and validation methods to meet the requirements from the assignment "client".
This includes: The Graphical User Interface (GUI), the Logic, Quality of code, and functions that don't require testing.

### Quality Objectives
The main objective of this assignment and the testing for this assignment is for the application to meet the full user requirements set out within the assignment requirements, however this takes a slightly different approach for this application. Due to the application idea and requirements being created by us in the team, the focus is on the different approaches to testing for the application. This is broken down in the types of testing that is shown above, in "Types of testing this team will be using".

For that reason, the main objective can be broken into a very "secondary" objective, where our vast testing will help identify any functionality faults within the application, and work with logic to build the cipher and test them sufficiently.

### Test Approach
This is shown in our types of testing, shown above.

### Test Strategy
The QA role is given to member who will overlook and take on the QA for the application. This role requires the person to understand the requirements, and also the functionality that the developer has written. Building basic unit test should be carried out by the developer, but other types of testing (such as end-to-end and manual) can be written and scoped out in advance, preparing for when feature work has been completed and moved into QA within JIRA.

Bugs are a common thing that happen, and are often found within the QA of an application. The bug that rises from a ticket means that new ticket is created with the bug listed, and the original is left in QA as it hasn't passed. This bug will then move back and forth between Development and QA until it is successful, meaning the original ticket can now be completed also.
The priority of bugs are key when testing, but within this application they cannot be too severe. Working in an Agile Scrum team means that any blockers that come with the bug means we can aid the ticket, and resolve any issues. Typically, severity is classed on how much it impacts within the application, from low being that a number box accepts letters, to high being that the application doesn't load.

Due to the time given on this project, QA is being completed when tickets are placed into the QA column within JIRA. QA members can also prepare, as stated above, for later features. For this reason, a test schedule will all show the same date as testing is done later in the development of this application. The timeline is showcased in the DoD (Definition of Done) section above, highlighting our approach to release.

## Manual Tests

Please see the below link to manual tests carried out at the for this project application.

https://docs.google.com/spreadsheets/d/1rBOsmxqM9a_onB8koWqaa8TOcCeNtsKvChmZE158dnE/edit?usp=sharing

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
