// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "GNU AGPLv3":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case "GNU GPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "GNU LGPLv3":
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    case "Mozilla Public License 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "Apache License 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "MIT License":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Boost Software License 1.0":
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case "No License":
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "GNU AGPLv3":
      return `GNU Affero General Public License v3.0
        
        Permissions of this strongest copyleft license are conditioned on making available 
        complete source code of licensed works and modifications, which include larger works 
        using a licensed work, under the same license. Copyright and license notices must be
        preserved. Contributors provide an express grant of patent rights. When a modified version 
        is used to provide a service over a network, the complete source code of the modified version
        must be made available. `;
    case "GNU GPLv3":
      return `GNU General Public License v3.0
  
        Permissions of this strong copyleft license are conditioned on making available complete source
         code of licensed works and modifications, which include larger works using a licensed work, 
         under the same license. Copyright and license notices must be preserved. Contributors provide
          an express grant of patent rights.`;
    case "GNU LGPLv3":
      return `GNU Lesser General Public License v3.0
  
        Permissions of this copyleft license are conditioned on making available complete source code 
        of licensed works and modifications under the same license or the GNU GPLv3. Copyright and
        license notices must be preserved. Contributors provide an express grant of patent rights. 
        However, a larger work using the licensed work through interfaces provided by the licensed 
        work may be distributed under different terms and without source code for the larger work.`;
    case "Mozilla Public License 2.0":
      return `Mozilla Public License 2.0
  
        Permissions of this weak copyleft license are conditioned on making available source code of
        licensed files and modifications of those files under the same license (or in certain cases,
        one of the GNU licenses). Copyright and license notices must be preserved. Contributors
        provide an express grant of patent rights. However, a larger work using the licensed work
        may be distributed under different terms and without source code for files added in the 
        larger work.`;
    case "Apache License 2.0":
      return `Apache License 2.0
  
        A permissive license whose main conditions require preservation of copyright and license notices.
        Contributors provide an express grant of patent rights. Licensed works, modifications, and 
        larger works may be distributed under different terms and without source code.`;
    case "MIT License":
      return `MIT License
        
        A short and simple permissive license with conditions only requiring preservation of copyright
        and license notices. Licensed works, modifications, and larger works may be distributed under
        different terms and without source code.`;
    case "Boost Software License 1.0":
      return `Boost Software License 1.0
  
        A simple permissive license only requiring preservation of copyright and license notices for
         source (and not binary) distribution. Licensed works, modifications, and larger works may be 
         distributed under different terms and without source code.`;
    case "No License":
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `# ${userInput.title}
  ## Table of Contents

  [Installation](#Installation)<br>
  [Usage](#Usage)<br>
  [Credits](#Credits)<br>
  [License](#License)<br>
  
  
   ${renderLicenseBadge(userInput.license)}
  ## Description
    ${userInput.description}
  ## Installation
    ${userInput.install}
  ## Usage
    ${userInput.usage}
  ## Credits
    ${userInput.credits}
  ## License
   ${renderLicenseSection(userInput.license)}
 
`;
}

module.exports = generateMarkdown;
