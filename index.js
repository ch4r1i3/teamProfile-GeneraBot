// Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHtmlPage');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// Class containing all questions
class Prompt{
    constructor() {
        this.teamArray = [];
    }

    /**
     * @returns the array of all Employee objects
     */

    getTeamArray() {
        return this.teamArray;
    }

// Questions
questions() {
    inquirer.prompt(
    {
    type: 'list',
    name: 'employeeType',
    message: "Which type of employee would you like to add to the team?",
    choices: ['Manager', 'Engineer', 'Intern', 'I finished entering my team info']
    })
    .then(({employeeType}) => {
        if(employeeType === 'Manager'){
        inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "Please enter the manager's name",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the manager's name!");
            return false;
        }
    }
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the manager's employee id",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter a correct answer, the employee id should be a number!");
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the correct manager's email!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter a correct answer, the office number should be a number!");
                return false;
            }
        }
    },
    ])

    // Pushes Manager data into teamArray
    .then( (templateData) => {
        const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
        this.teamArray.push(newManager);
        // Sends user back to menu
        this.questions();
    });

    } else if (employeeType === 'Engineer') {
            inquirer.prompt([
                    {
                    type: 'input',
                    name: 'name',
                    message: "Please enter the engineer's name",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's name!");
                            return false;
                        }
                    }
                    },
                    {
                    type: 'number',
                    name: 'id',
                    message: "Please enter the engineer's employee id",
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please enter a correct answer, the employee id should be a number!");
                            return false;
                        }
                    } 
                    },
                    {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the engineer's email",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter the correct engineer's email!");
                            return false;
                        }
                    }
                    },
                    {
                    type: 'input',
                    name: 'github',
                    message: "Please enter the engineer's github username",
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log("Please enter the correct engineer's github username!");
                            return false;
                        }
                    }  
                    }

                // Pushes Engineer data into teamArray
                ]).then( templateData => {
                    const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                    this.teamArray.push(newEngineer);
                    // Sends user back to menu
                    this.questions();
                });

        } else if (employeeType === 'Intern') {
            inquirer.prompt([
                {
                type: 'input',
                name: 'name',
                message: "Please enter the intern's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
                },
                {
                type: 'number',
                name: 'id',
                message: "Please enter the intern's employee id",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter a correct answer, the employee id should be a number!");
                        return false;
                    }
                } 
                },
                {
                type: 'input',
                name: 'email',
                message: "Please enter the intern's email",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the correct intern's email!");
                        return false;
                    }
                }
                },
                {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school name",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the correct intern school's name!");
                        return false;
                    }
                }  
                }

            // Pushes Intern data into teamArray
            ]).then( templateData => {
                const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                this.teamArray.push(newIntern);
                // Sends user back to menu
                this.questions();
            });

        } else if (employeeType === 'I finished entering my team info') {
            //function that writes the html file in the dist folder
            const pagehtml = generateHTML(this.getTeamArray());
            fs.writeFile('./dist/index.html', pagehtml, err => {
                if (err) throw new Error(err);

                console.log('Page created! Check out index.html in the dist/ folder to see it!');
            });
        }
    });

}
};

// Activates prompts in CLI
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;