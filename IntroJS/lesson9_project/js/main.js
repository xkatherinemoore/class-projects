/* 
NAME: Katherine Moore
MEID: KAT2341012
DATE: 8/7/2023
*/

//Array of images
const images = [
    {
        name: "corgis",
        imgSrc: "./images/stock-photo-portrait-two-adorable-welsh-corgi.jpg",
        alt: "Two corgis on a couch.",
        caption: "Nothing like two adorable corgis",
    },
    {
        name: "cows",
        imgSrc: "./images/stock-photo-cows.jpg",
        alt: "Two cows in a field.",
        caption: "Mooooooooooo!",
    },
    {
        name: "top of the world",
        imgSrc: "./images/stock-photo-man-on-top-of-the.jpg",
        alt: "Man standing on peak of a mountain with arms out.",
        caption: "I\'m on top of the world!!!",
    },
    {
        name: "coffee",
        imgSrc: "./images/stock-photo-cropped-view-man-sitting-cafe.jpg",
        alt: "Pretty latte art.",
        caption: "Nothing like a good cup of coffee...",
    },
    {
        name: "beach",
        imgSrc: "./images/stock-photo-summer-beverages-cooler-chaise-lounges.jpg",
        alt: "Two empty chaise lounge chairs on the beach.",
        caption: "I could really use a vacation.",
    },
    {
        name: "concert",
        imgSrc: "./images/stock-photo-yellow-concert-crowd.png",
        alt: "Crowded concert venue.",
        caption: "Concerts are fun, but man I hate crowds.",
    },
];
//Returns a random image from the array
function randomPicture(images) {
    let index = Math.floor(Math.random()*images.length);
    return images[index];
}


//REUSED FUNCTIONS
//Adds a random image to an element (parameter) 
function addImage(element, image) {
    let newImage = randomPicture(images);

    compareImage(image, newImage); //ensures new image (not repeat image)

    element.innerHTML = 
        `<img src="${newImage.imgSrc}" alt="${newImage.alt}" />
        <br />
        <p class="caption">${newImage.caption}</p>
        `;

    image = newImage; //rewrite image
    return image;
}

//Compares old and new images to ensure different picture each time
function compareImage(oldImage, newImage) {
    while (oldImage === newImage) { 
        newImage = randomPicture(images); //creates a new image until old and new are different
    }
    return newImage; 
}

//Toggles class between show and hide
function toggleDisplay(element) {
    if (element.classList.contains('show')) {
        element.classList.replace('show', 'hide');
    } else if (element.classList.contains('hide')) {
        element.classList.replace('hide', 'show');
    }
}




// 1. Load Event - Adds img element to the document
let image = {};     //Empty image object (filled by addImage function)
let imgLoad = document.getElementById("img-load");
document.addEventListener('load', addImage(imgLoad, image));

// 2. Click Event - Changes the displayed image when clicked
let imgClick = document.getElementById("img-click");
imgClick.addEventListener('click', imageChange);

function imageChange(e) {
    e.preventDefault();

    addImage(imgClick, image);
}

// 3. Dblclick Event - Toggles class to show/hide for the image and reload button
let imgDblclick = document.getElementById("img-dblclick");
let hiddenBtn = document.getElementById("hidden-btn");
imgDblclick.addEventListener('dblclick', removeImage);
hiddenBtn.addEventListener('click', removeImage);

function removeImage(e) {
    e.preventDefault();
    toggleDisplay(imgDblclick);
    toggleDisplay(hiddenBtn);
}

// 4. Mouseover Event - Toggles class to show/hide when mouseover image
let imgMouseover = document.getElementById("img-mouseover");
let mouseoverCaption = document.getElementById("mouseover-caption");
imgMouseover.addEventListener('mouseover', mouseoverFunction);

function mouseoverFunction(e) {
    e.preventDefault();
    toggleDisplay(mouseoverCaption);
}

// 5. Mouseleave Event - Toggles class to show/hide when mouseleave image
let imgMouseleave = document.getElementById("img-mouseleave");
let mouseleaveCaption = document.getElementById("mouseleave-caption");
imgMouseleave.addEventListener('mouseleave', mouseleaveFunction);

function mouseleaveFunction(e) {
    e.preventDefault();
    toggleDisplay(mouseleaveCaption);
}

// 6. Scroll Event - Adds new text to div when scrolled with timeout
let textScroll = document.getElementById("text-scroll");
let scrollOutput = document.getElementById("scroll-output");
textScroll.addEventListener('scroll', scrollEvent);

function scrollEvent(e) {
    e.preventDefault();
    setTimeout( 
        () => {scrollOutput.innerHTML = "<p>...This text gets added</p>";},
        1000);
};

// 7. Input Event - As user types, text appears in new div
let inputBox = document.getElementById("inputName");
let outputBox = document.getElementById("text-output");
inputBox.addEventListener('input', respondToName);

function respondToName(e) {
    e.preventDefault();
    let input = inputName.value;
    setTimeout(() => {
        outputBox.innerHTML = `<p>Hello ${input}!</p>`
    }, 2000);
}

// 8. Focusout Event - Email form validation on focusout
let focusoutInput = document.getElementById("inputEmail");
focusoutInput.addEventListener('focusout', emailValidation);

function emailValidation(e) {
    e.preventDefault();
    let email = inputEmail.value;
    let regEx = /^[a-z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-z]+\.[a-z]{2,3}$/i;
    let match = email.match(regEx);

    console.log(match);
    if (match) {
        let validation = document.getElementById("emailValidation");
        validation.style.color = "green"
        validation.innerHTML = "<i class=\"bi bi-check-circle-fill\"></i>"
        focusoutInput.parentElement.appendChild(validation);
    } else {
        let validation = document.getElementById("emailValidation");
        validation.style.color = "red";
        validation.innerHTML = "<i class=\"bi bi-x-circle-fill\" style=\"color: red\"></i>"
        focusoutInput.parentElement.appendChild(validation);
    }
}

// 9. Change Event - Background color changes when selection is changed
let bgColorChange = document.getElementById("bg-color");
bgColorChange.addEventListener('change', changeBgColor);

function changeBgColor(e) {
    e.preventDefault();
    let bgColor = bgColorChange.value;
    let body = document.querySelector("body");
    body.style.backgroundColor = `${bgColor}`;
}

// 10. Submit Event - Adds a background image to the webpage
let form = document.getElementById("submitForm");
form.addEventListener('submit', handleSumbit);

function handleSumbit(e) {
    e.preventDefault();

    let bgImage = e.target.bgImage.value;
    let body = document.querySelector("body");

    console.log(bgImage);

    //sets bg image of body
    switch(bgImage) {
        case "smile":
            body.style.backgroundImage = "url(\"images/bg-emoji-images/emoji-smile.svg\")"
            break;
        case "wink":
            body.style.backgroundImage = "url(\"images/bg-emoji-images/emoji-wink.svg\")"
            break;
        case "kiss":
            body.style.backgroundImage = "url(\"images/bg-emoji-images/emoji-kiss.svg\")"
            break;
        case "sunglasses":
            body.style.backgroundImage = "url(\"images/bg-emoji-images/emoji-sunglasses.svg\")"
            break;
        case "dizzy":
            body.style.backgroundImage = "url(\"images/bg-emoji-images/emoji-dizzy.svg\")"
            break;
        default:
            break;
    }
    
    //adds other style components (same for all images)
    body.style.backgroundRepeat = "repeat";
    body.style.backgroundSize = "50px 50px";
}