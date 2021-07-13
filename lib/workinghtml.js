//Regexp and patterns
//To get the contents of a file as a string, we can use the readFileSync() or readFile() functions from (fs) module in Node.js.
const path = require("path");
const fs = require("fs");

//Pulling to  HTML
const fillercode = path.resolve(__dirname, "../Coll");

const teambuilder = teamgenerate => {
const html = [];

html.push(teamgenerate
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => buildmanager(manager))
         );

html.push(teamgenerate
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => buildengineer(engineer))
          );
                       
html.push(teamgenerate
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => buildintern(intern))
         );              

 return completeprofilebuild(html.join(""));

};

const buildmanager = manager => {
let inputpatterns = fs.readFileSync(path.resolve(fillercode, "manager.html"),"utf8");
    inputpatterns =emp_comp(inputpatterns, "name", manager.getName());
    inputpatterns =emp_comp(inputpatterns, "role", manager.getRole());
    inputpatterns =emp_comp(inputpatterns, "emailadd", manager.getEmail());
    inputpatterns =emp_comp(inputpatterns, "id", manager.getId());
    inputpatterns =emp_comp(inputpatterns, "officeNumber", manager.getOfficeNumber());
 return inputpatterns;
        };

 const buildengineer = engineer => {
 let inputpatterns = fs.readFileSync(path.resolve(fillercode, "engineer.html"),"utf8");
     inputpatterns =emp_comp(inputpatterns, "name", engineer.getName());
     inputpatterns =emp_comp(inputpatterns, "role", engineer.getRole());
     inputpatterns =emp_comp(inputpatterns, "emailadd", engineer.getEmail());
     inputpatterns =emp_comp(inputpatterns, "id", engineer.getId());
     inputpatterns =emp_comp(inputpatterns, "github", engineer.getGitHub());
  return inputpatterns;
                };

 const buildintern = intern => {
 let inputpatterns = fs.readFileSync(path.resolve(fillercode, "intern.html"),"utf8");
                           inputpatterns =emp_comp(inputpatterns, "name", intern.getName());
                           inputpatterns =emp_comp(inputpatterns, "role", intern.getRole());
                           inputpatterns =emp_comp(inputpatterns, "emailadd", intern.getEmail());
                           inputpatterns =emp_comp(inputpatterns, "id", intern.getId());
                           inputpatterns =emp_comp(inputpatterns, "school", intern.getSchool());
                        return inputpatterns;
                       };
                       
const completeprofilebuild = html => {
const inputpatterns = fs.readFileSync(path.resolve(fillercode, "teamheader.html"), "utf8");
return emp_comp(inputpatterns, "team", html);
};

const emp_comp = (inputpatterns, placeholder, value) => {
const sampcomp = new RegExp("{{ " + placeholder + " }}", "gm");
return inputpatterns.replace(sampcomp, value);
};

module.exports = teambuilder;
