# MED ASSISTANT - An AI Assitant for Medical workers

Welcome to the official repository of MED ASSISTANT.

MED ASSISTANT is a bilingual AI powered medical worker assistant platform that can effeciently carry out medical history taking remotely using Generative AI and also assist medical health workers in decision making and make suggestions.The platform aims to address the challenges faced by healthcare providers, particularly in regions with limited medical staff, by automating the patient interview process and reducing diagnosis time.

MED ASSISTANT is also equipped with a chatbot for enquiries and to clearify all medical confusion for medical student, medical health workers and all individual interested in medical information.

## STRUCTURE

- `Frontend/`: this contains code for the front end of the platform
- `Backend/`: this contains backend code for the platform

## PURPOSE

This GitHub repository's main goal is to act as the focal point for the creation, documentation, and cooperation of an AI-powered platform that eases the process of gathering medical history and helps healthcare professionals with diagnosis.
By putting the project's codebase, documentation, and other pertinent materials online, this repository will support the following goals:

- Create a central resource hub;
- Facilitate collaborative development;
- Ensure version control and transparency;
- Enable open-source contributions;
- Provide comprehensive documentation;
- Encourage accountability and transparency.

## How we will solve the Problem

To achieve the solution, we will use Generative AI model and effective propmts to effectively ask the right question in an interective way. so that the user is engaged and provide information concerning his/her medical state.
The AI model used is well trained on medical data and have good knowledge of the use case
We also leverage the use of speech to text and text to speech model to effeciently handle the audio communication
Leverage translation model to incorporte bilingual feature

## Getting Started

Let's get the project running locally on your machine.

### 0. Prerequisites

To run this project you need the following installed:

- [Node 18.17](https://nodejs.org/) or later
- [PNPM](https://pnpm.io/installation)

### 1. Installation

Clone the project:

```
git clone https://github.com/AgabaEmbedded/Med-Assistant.git
```

Navigate into the project directory and install its dependencies:

```
cd Med-Assistant/
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

<!-- CONTRIBUTING -->

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### Contribution Guidelines

1. Clone the repo `git clone https://github.com/AgabaEmbedded/Med-Assistant.git`.
2. Create a new branch from the `dev` branch `git checkout -b Feat/{feature you're working on}`
3. Make sure your branch is up to date with the `dev` branch by running `git pull origin dev`
4. After making changes, do `git add .` to stage the changes.
5. Commit your changes with a descriptive commit message: `git commit -m "your commit message"`.
6. To make sure there are no conflicts with the `dev` branch, run `git pull origin dev`.
7. Push the changes to your new branch, run `git push -u origin Feat/{feature you're working on}`.
8. Create a pull request to the `dev` branch not `main`.
9. Ensure to describe your pull request.

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature you're adding                                                                                 |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Features and updates relating to styling                                                                    |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify, frontend or test files                                                     |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.
