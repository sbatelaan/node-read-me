// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown')
const path = require('path')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
      name: 'title',
      message: 'What is the name of your project?'},

      {
        type: 'input',
      name: 'description',
      message: 'Give a description of your project'},

      {
        type: 'input',
      name: 'installation',
      message: 'How does the user install/use the application?'},

      {
        type: 'input',
      name: 'tests',
      message: 'Give instructions on how to run all necessary tests'},

      {
        type: 'input',
      name: 'usage',
      message: 'How does the user use the application?'},

      {
        type: 'input',
      name: 'contributors',
      message: 'Who else contributed on the project? (Github username)'},

      {
      type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "bsd-3-clause", "none"],},

        {
        type: "input",
    name: "creator",
    message: "Link to your github",},

        {
        type: "input",
    name: "email",
    message: "Provide a valid email address",},

          {
    type: "input",
    name: "link",
    message: "Provide a link (URL) to deployed application",},

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data)
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README...");
        writeToFile("./README.md", generateMarkdown({...responses}));
    })
}
