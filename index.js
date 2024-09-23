// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import { promises as fs } from 'fs';

// TODO: Create an array of questions for user input
const questions = [

    { type: 'input', name: 'title', message: 'What is your project title?' },
    { type: 'input', name: 'description', message: 'Provide a description of your project:' },
    { type: 'input', name: 'installation', message: 'How do you install your project?' },
    { type: 'input', name: 'usage', message: 'How do you use your project?' },
    { type: 'input', name: 'contributing', message: 'What are the contribution guidelines?' },
    { type: 'input', name: 'tests', message: 'Provide test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
        fs.writeFile(fileName, data, (err) =>
          err ? console.error(err) : console.log(`${fileName} has been created!`)
        );
}

function generateREADME(answers) { 
     let licenseBadge = '';
    switch (answers.license) {
       case 'MIT':
        licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        break;
       case 'Apache 2.0':
        licenseBadge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        break;
       case 'GPL 3.0':
        licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        break;
       case 'BSD 3':
        licenseBadge = '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
        break;
    }
  
    return `
    # ${answers.title}
    ${licenseBadge}
  
    ## Description
    ${answers.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${answers.installation}
  
    ## Usage
    ${answers.usage}
  
    ## License
    This project is licensed under the ${answers.license} license.
  
    ## Contributing
    ${answers.contributing}
  
    ## Tests
    ${answers.tests}
  
    ## Questions
    For any questions, you can contact me through my GitHub profile: [${answers.github}](https://github.com/${answers.github}) or email me at ${answers.email}.
    `;
  }

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateREADME(answers);
      writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
