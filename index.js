//Follows the Readme generator ex concept
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const render = require("./lib/workinghtml.js");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

 //Output in DESTINATION dir in filename team
 
 const DEST_DIRECTORY = path.resolve(__dirname, "dest");
 const OUTPUT_PATH = path.join(DEST_DIRECTORY, "team.html");

//Team composition choices
let employeedata = [];
const teamcomposition = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Pick an employee type',
            name: 'employeeType',
            choices: [Manager, Engineer, Intern]
        },
    ])
 .then(answer => {
     if (answer.employeeType === 'Manager') {
                 managerQ();
            } 
            else if
        (answer.employeeType === 'Engineer') {
                engineerQ();
            }
            else if
        (answer.employeeType === 'Intern') {
                internQ();
            }
            else 
            {
                //console.log('No emp to process');
                     return;
            }
        })
}

teamcomposition();
//Manager Engineer & Intern to follow-Similar to previous ex Readme generator Questions and answers
const managerQ = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter a name?',
            name: 'mname'
        },
        {
            type: 'input',
            message: 'Enter  ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter email?',
            name: 'emailadd',
        },
        {
            type: 'input',
            message: 'Enter  office number?',
            name: 'officeNumber',
        },
        {
            type: 'confirm',
            message: 'Add another employee?',
            name: 'addanother',
        },

    ])
        .then(answers => {
            const manager = new Manager(answers.mname, answers.id, answers.emailadd, answers.officeNumber);
            employeedata.push(manager);

            console.log(employeedata);

            if (answers.addanother) {
                teamcomposition();
            } 
     else {
                let data = render(employeedata);
                fs.writeFile(OUTPUT_PATH, data, (err) => {
                    if (err) throw err;
                    console.log('Success');
                });
            }
        })
}


const engineerQ = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter a  name?',
            name: 'ename'
        },
        {
            type: 'input',
            message: 'Enter an  ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter an  email address?',
            name: 'emailadd',
        },
        {
            type: 'input',
            message: 'Enter GH username?',
            name: 'github',
        },
        {
            type: 'confirm',
            message: 'Want to add another employee?',
            name: 'addanother',
        },

    ])
        .then(answers => {
            const engineer = new Engineer(answers.ename, answers.id, answers.emailadd, answers.github);
            employeedata.push(engineer);

            console.log(employeedata);

            if (answers.addanother) {
                teamcomposition();
            } 
     else 
     {
                let data = render(employeedata);
                fs.writeFile(OUTPUT_PATH, data, (err) => {
                    if (err) throw err;
                    console.log('HTML will bebgenerated');
                });
            }
        })
}


const internQ = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter a name?',
            name: 'iname'
        },
        {
            type: 'input',
            message: 'Enter an   ID?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Enter  email?',
            name: 'emailadd',
        },
        {
            type: 'input',
            message: 'Enter school?',
            name: 'school',
        },
        {
            type: 'confirm',
            message: 'Want to add another employee?',
            name: 'addanother',
        },

    ])
        .then(answers => {
            const intern = new Intern(answers.iname, answers.id, answers.emailadd, answers.school);
            employeedata.push(intern);

            console.log(employeedata);

            if (answers.addanother) {
                teamcomposition();
            }
     else
     {
                let data = render(employeedata);
                fs.writeFile(OUTPUT_PATH, data, (err) => {
                    if (err) throw err;
                    console.log('Success');
                });
            }
        })
}
