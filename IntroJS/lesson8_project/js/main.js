/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: MM/DD/2023
*/

//Header text
let headerText = document.querySelector('.header').textContent; //Used .header because my Project/name is also in a header tag

//Number of paragraph elements
let totalParagraphs = document.getElementsByTagName('p').length;

//Total number of headings tags (h*)
let totalHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6').length;

//Total number of li in ul tag on page
let totalListItems = document.querySelectorAll('ul li').length;

//Total number of anchor tags on page
let totalLinks = document.getElementsByTagName('a').length;

//Prints created variables to console
/*
console.log(headerText);
console.log(totalParagraphs);
console.log(totalHeadings);
console.log(totalListItems);
console.log(totalLinks);
*/

//Compares number of links on the page to max allowed. Prints message if over the max number
let maxLinks = 3;
if (totalLinks > maxLinks) {
    let linkWarning = `This page has too many links! The limit is ${maxLinks}.`

    //Used to display warning message
    element = document.getElementById('link_warning');
    element.style.display = 'grid'; 

    //Adds message
    document.getElementById('link_message').innerHTML = linkWarning;
}

//Writes to HTML
document.getElementById('article_title').innerHTML = headerText;
document.getElementById('total_paragraphs').innerHTML = totalParagraphs;
document.getElementById('total_lines').innerHTML = totalHeadings;
document.getElementById('total_headings').innerHTML = totalListItems;
document.getElementById('total_links').innerHTML = totalLinks;