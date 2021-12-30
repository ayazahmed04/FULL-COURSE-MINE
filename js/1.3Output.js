      // interactivity
// HTML5 and CSS3 are not really interactive
// New elements and pserdo-classes can  only go so far

      // What can javascript Do
// Tead and write HTML  elements 
// REacts to events (mouse events, keyboard events, etc.)      
// Validate Data
// Detect the visitor's browser
// Create cookies

      // JavaScript OutPut
// JavaScript doesn't have a built-in print function
// Data is displayed via
// - an alert box using window.alert()
// - a prompt using window.prompt()
// - HTML output using document.write()
// - HTML element using innerHTML()
// - the browser console using console.log()

      // alert()
// In JS, an alert is a pop-up window that displays information
      alert("My message here ")
   prompt("this is the box ")
// very similar to alert, but wants the input



// general way to add a something in the display
         // > document.write()
   // > what if we want something permanent?
   // > document.write() writes directly to the page
   /*e.g.,> */document.write("it's time to learn javascript")    
   

      // innerHTML
   // To change  the contents of the DOM, use innerHTML combined with the element you want to chage
   // e.g., > element.innerHTML = "Time to learn JavaScript";
   // the element eill come from the api's
// way of getting element from the ID 
document.getElementsByTagName(h1).innerHTML = 'THIS IS THE JAVASCRIPT';  

<html>
<body>
   <h1 id="this">This is Id changed with the help of the JS</h1>
   <p class="para">thisi is the para</p>
   <script>
      document.getElementsByTagName('p').innerHTML= 'now para is changed';
      document.getElementById('this').innerHTML='heading changed';

      let paras = document.getElementsByClassName('para').innerHTML = 'Is para changed with the help of the html';
   </script>
</body>
</html>
docment.getElementsByTagName('a').innerHTML = "now Para is changed ";

                        console.log('this option write the data to the browser console');
      console.log('leave a secret message');
            // the console is a place to see what is going on during the execution of your program


                              // The Console
      //  you should be utilizing the console by now 
      // Does more than take "print" statements, also provides debugging information for JavaScript, HTML  and even CSS
      

                        // Debugging
//      Safari: preference > Advanced Check the Show development menu in menu in menu box 
//      Chrome : 
//      FireFox : Tools> console    > this is the best browser 




                                    // REwiew 
      // Right now we are doing simple things with the output
      // As you learn more, the power grows
      