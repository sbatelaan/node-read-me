
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //repeat if else for rest of license
  //if none return string that says no license
  if (license === 'APACHE2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'bsd-3-clause') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  else {
  return 'No License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}
  ## License
  ${renderLicenseLink(data.license[0])}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [How to Use This Application](#HowToUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## How To Use Application
  ${data.usage}
  ## Testing
  ${data.tests}
  ## Contributors
  ${data.contributors}
  ## Application link
  ${data.link}
  # Questions
  ## Contact me via Email
  ${data.email}
  ## Link to my Github profile
  ${data.creator}`
}


module.exports = generateMarkdown;