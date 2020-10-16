// function to generate markdown for README
function getLicenseBadge(license){


  var licenseStr = license.split(" ").join("%20")
    return `![GitHub license](https://img.shields.io/badge/${licenseStr}-blue.svg)`
  }

function generateMarkdown(data) {
  return `# ${data.title} ${getLicenseBadge(data.license)}

  ## Main Contact:
  [${data.username}](https://github.com/${data.username})
  ${data.email}

  ## Table of Contents:
  1. [Usage](#Usage)
  2. [Testing](#Testing)
  3. [Installation](#Installation)
  4. [Issues](#Issues)
  5. [Contributions](#Contributions)

  ## Usage: 
  ${data.usage}

  ## Testing:
  ${data.test}

  ## Installation:
  ${data.installer}

  ## Issues:
  ${data.reportIssues}

  ## Contributions:
  ${data.contributions}
`;
}

module.exports = generateMarkdown;
