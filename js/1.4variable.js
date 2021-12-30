         // Storing Data 
   // Part of learning to program is learning to store data
   // In JavaScript, data is stored in variables
   // To use a variable, you have to declare it
   // .e.g.,  var name;
   

            // Variable Names
   // consists of letters, digits, underscore, and dollar sign($)
   // can't start with a digit
   // are case sensitive.. 
         // > name Name, naMe, MAME are all different variables
   // Should be mnemonic(meaningful)

            // Variable assignments
   // It is silly to have a vaiable if you are never going to use it
   // YOu can assign values using the  = operator
   let name = "Ayaz";
         
            // Assignments statements
   // LHS - the  variable being updated
   // RHS - the new value that will be stored in the  variable
   // updated
//    name =>  "Ayaz Ahmad";



prompt(name)
document.write(name);
let date = Date();
document.write(date);
let location = window.location;
document.write(location);
console.log(location);



  // let nm = "Ayaz";
  // document.write(nm)

// alert(nm)
// console.log(nm)
// prompt(nm)

let nm = prompt("what is your name");
document.write(nm);
console.log(nm)
alert(nm);


            // this is the way of adding the name in the browser screen when someOne hit the prompt and add  name 
            // let name;
            name = prompt('what is your name');
            // the name that user use in this prompt box the name will be saved in all the tags
            document.write(name);
            document.write("<h1>" + name + "</h1>");
            document.write(document.baseURI+"<br>");

            let newName = "Ayaz Ahmad";
            console.log("Ayaz Ahmad ");
            


            let newHtml = document.querySelector("p").innerHTML = "<h1>"+"This is the name"+"</h1>";