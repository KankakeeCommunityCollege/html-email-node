const fs = require('fs');
const generateEmailString = require('./generateEmailString');

// So that the copyright year is always current
let year = new Date().getFullYear();

// Define the body of the email response as a string ( inline-HTML is allowed but don't use html5! )
// The 4 tabs (of 2 spaces each or 8 spaces total) preceding each line ensures proper indentation in the resulting html file.
const par1 = `Hello,<br />
        Thank you for contacting Kankakee Community College. We have received your request for information, and
        a member of our recruitment team will be in touch shortly. Until our return,
        <a href="https://kcc.smartcatalogiq.com/2021-2022/Academic-Catalog/Programs-of-Study-by-Area">please visit our online catalog</a>
        where you will find information about the programs currently offered
        at KCC. The listings include details on required coursework, program length and structure, and estimates of
        tuition cost.`;

// Define the signature block of the email response. Again, inline-HTML elements are allowed.
// 4 tabs (made of 2-spaces each) precedes each line so that the indention looks nice in the output HTML file
const signature = `Melanie Green, M.Ed.<br />
        Student Success Advisor – Transfer<br />
        Kankakee Community College<br />
        Department of Student Success<br />
        <a style="display: inline-block;" href="tel:+18158028519">815-802-8519</a><br />
        <a style="display: inline-block;" href="mailto:mgreen@kcc.edu">mgreen@kcc.edu</a>`;

// Adds a footer section at the bottom of the email for general info and/or copyright info.
// The `year` variable can be used to ensure the current year is used (in case you forgot?)
const footerContent = `You have received this email through a form filled out on healthhonors.kcc.edu<br>
        © ${year} Kankakee Community College. All rights reserved.`;

// Define the "settings" for the email
const settings = {
  title: 'Health Honors Response', // Email's title
  fullWidthHeaderImage: { // Add a header-image at the top of the email. This image will be scaled to the width of the email body
    src: 'https://cdn.kcc.edu/graphics/health-honors_graphic.png', // Images should be put on Web03/.../cdn/graphics/ first!
    alt: 'Health Honors program-logo', // Don't neglect the alt-text!
  },
  bodyParagraphArray: [ // Each paragraph for the email's body should be a an item in this array - not including the signature line!
    par1 //, // Must be a string - old inline-HTML is allowed e.g. <br />
  //par2 // Define additional paragraphs above and add them to the array
  ],
  emailSignature: signature, // This should be a string for the signature 
  footerMessage: footerContent, // This is the bottom-most message of the email - usually general info about the email
}

function createHtmlEmailFile() {
  let data = generateEmailString(settings);

  fs.writeFile(`./dist/${settings.title.replace(/\s/g, '-').toLowerCase()}_email-response.html`, data, (err) => {
    if (err) throw err;

    console.log(`The file "${settings.title.replace(/\s/g, '-').toLowerCase()}_email-response.html" has been saved!`);
  });  
}

createHtmlEmailFile();