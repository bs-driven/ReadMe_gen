// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  if (license === "Boost") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
  }

  if (license === "BSD"){
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  }

  if (license === "MIT"){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  if (license === "No License"){
    return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License"){
    return "";
  } else{
    return "- [Licencse](#license)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License"){
    return "";
  } else{
    return "## License"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

 ${renderLicenseSection(data.licenseSelection)}
${renderLicenseBadge(data.licenseSelection)}
## Description
${data.projectDesc}
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.licenseSelection)}
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installInstrutions}
## Usage
${data.usage}
## Credits
${data.credits}
## How to Contribute
${data.contributors}
## Tests
${data.tests}
## Questions
<a href = "https://github.com/${data.github}" > Github Profile </a><br>
<a href = "mailto:${data.email}" > Email Me </a>
## Email
Go the extra mile and write tests for your application. Then provide examples on how to run them here.

`;
}

module.exports = generateMarkdown;
