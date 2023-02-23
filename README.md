# js1-ca


Course Assignment

Brief
Level 1 is required.
Level 2 is optional.

!!!!!
Choosing appropriate variable and function names will form part of your assessment, as will proper and consistent formatting of your code.

functions are verbs, variables are nouns



///Level 1 Process///

--- Find an API 

XX Search for a public, free-to-use API.

XX You will need to make two calls to this API:

XX to fetch an array of results (do display on index)

XX to fetch a single result using an id, name, or other property (to display on details)

XX You will need to read the API’s documentation to see what URLs are available, if they require a key to be sent in the header, and any other configuration they might need.

XX There are many free APIs discoverable by a Google search.

XX You may not use the APIs used in the lessons.


--- Styling

XX The focus of the CA is on JavaScript, not styling. 
XX Yet, as a front-end developer you will always need to produce user-interfaces that make sense and are easy to follow. - - 
XX You will need to provide navigation to and from the home page (index.html) and the contact page.

XX Both API calls should include a loading indicator.


---index.html

XX Make a call to your API URL. 
XX Loop through the results and create HTML for each result.

XX You must display at least 3 different properties inside the HTML. It’s not required to display an image.

XX You will need to link each result to a details.html page and to pass a parameter in the query string to that page. 

XX If you are going to fetch the individual result on the details page by its id, then pass an id in the query string. 
idDrink

XX If you will be retrieving by another property, like name for example, pass the name in the query string.
idDrink

XX You will fetch this parameter from the query string in the details page code. id

XX Catch any errors and display a message on the page if an error occurs.

---details.html

(Remember, you will need a parameter in the query string on this page, so either click through to it from the index page or manually add a parameter to the URL).

XX Retrieve the id, name or other parameter from the query string.

XX Once you have the parameter, add it to the API URL in the format the API requires. 

XX Make an API call using the URL you create. 

XX Display at least 3 different properties from the received JSON on this page.

XX Set the title of the HTML page to be one of the property values, like name, title or another relevant property.

XX Catch any errors and display a message on the page if an error occurs.





//contact.html//

XX Create a form with the following inputs and validation rules.

XX Name - required



XX Subject - must have a value with a minimum length of 10



XX Email - must have a value and be formatted like an email address




XX Address - must have a value with a minimum length of 25



XX When the form on this page is submitted, write code to validate the input. 

XX If any of the inputs fail validation display an error message for the relevant input.


////////////////////////////////////////////////////////////////////////////////

Level 2 Process
contact.html
If all validation passes, add a message above the form indicating the form passed validation.

- Information

Rules
Sharing APIs and copying of any code will result in your assignment being given a mark of ‘not passed’. Please do not plagiarise.
You may only use plain JavaScript for this assignment, no libraries or frameworks. You will be given a mark of ‘not passed’ if you use a library or framework for your JavaScript code.

Submission
Create a folder called your-name-js1-ca, e.g. mary-smith-js1-ca
Add all your code to this folder, zip the folder and submit the zip file

Time
40 hours