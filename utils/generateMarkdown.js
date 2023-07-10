// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return '';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD 3-Clause') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else {
    return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  if (license === 'MIT') {
    return `
This project is licensed under the [MIT License](${licenseLink}).`;
  } else if (license === 'Apache 2.0') {
    return `
This project is licensed under the [Apache License 2.0](${licenseLink}).`;
  } else if (license === 'GPLv3') {
    return `
This project is licensed under the [GNU General Public License v3.0](${licenseLink}).`;
  } else if (license === 'BSD 3-Clause') {
    return `
This project is licensed under the [BSD 3-Clause License](${licenseLink}).`;
  } else {
    return '';
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
# ${data.title}


## Description

${data.description}

${licenseBadge}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${data.installation}


## Usage

${data.usage}


## License

${licenseSection}


## Contributing

${data.contributing}


## Tests

${data.tests}


## Questions

Additional questions: please visit (https://github.com/${data.github})
or contact ${data.email}
`;
}

module.exports = generateMarkdown;
