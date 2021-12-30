                        // web pages are built upon the DOM
  // Document object Model
  // Structures documents like a tree
  // Every node has one parent, and possibly many children
  // Nodes have properties, methods and events

                        // The DOM and Javascript
   // Page content is represented by the DOM 
   // Scripting languages(javaScript) use the DOM to Interact with the document

                        // HOw does it work?
   // Accessing the DOM is done with an API 
   // Application Programming interface
   // > no matter which browser, no matter which scripting language, the API is the same

                        // The Dom objects/elements
   // document-the root of the page
   // > document.URL, document.height , document.links, documets.bgColor, ....
   //// element - a node in the tree
   // > Returned by a member of the API
   // nodeList-an array(group) of elements
   // > document.getElemetByTagName('p') would return a set of nodes
   // Attribute
   //  > A node in the DOM, through rarely used that way. Another way to manipulate/change the document
   // >> e.g., img have attribute src, width , alt etc.,

                        // Specific ApIs
   // document.getElementById(id)
   // document.getElementByClassName(class)
   // Elemets.innerHTML
   // elemet.style
   // element.setAttribute(attriure , value)
   // element.removeAttribute(attribute)


                        // REview
   // As you learn more JavaScript, you will be able to use the APIs
   // We will start slow, but the important part is to eventually feel comfortable searching for these tools

   const funa = () => {
       console.log("This is the function");
   }; // how to make the awsome font in the JS 

let name =    document.querySelector("a").setAttribute("class", "open");
