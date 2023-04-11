// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// return a badge
function renderLicenseBadge(license) {
  if (license !== 'NONE') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return '*[License](#-Contributing)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'NONE') {
    return '# License';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title
   ${data.title}
   ${renderLicenseBadge(data.getLicense)}
   ${data.getLicense}

  # Description
  ${data.description}

  # Table of Contents
   *[Installation](#-Installation)
   *[Usage](#-Usage)
   *[Contributing](#-Contributing)
   *[Tests](#-Tests)
   *[Questions](#-Contact-Information)
   ${renderLicenseLink(data.getLicense)}

  # Installation
   ${data.installation}

  # Usage
   ${data.usage}

  ${renderLicenseSection(data.getLicense)}
  ${renderLicenseBadge(data.getLicense)}
   ${data.license}
   * As this license list was not comprehensive, if you need another license, use the contact information below to ask for license to be added.

  # Contributing
   ${data.contributing}

  # Contact Information
   *GitHub Username: ${data.userName}
   *Contact Email: ${data.userEmail}

`;
}
// Export the generateMarkdown function
module.exports = generateMarkdown;

