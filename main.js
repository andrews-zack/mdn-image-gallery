const displayedImage = document.querySelector('displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = [   
    'images/pic1.jpg', 
    `images/pic2.jpg`, 
    `images/pic3.jpg`, 
    `images/pic4.jpg`, 
    `images/pic5.jpg`,
];

/* Declaring the alternative text for each image file */
const imgAlt = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Closeup of the inside of a seashell',
    'pic3.jpg' : 'Purple and white flowers',
    'pic4.jpg' : 'Section of colorized ancient Egyptian wall painting and hieroglyphics',
    'pic5.jpg' : 'Brown butterfly with white markings sitting on a leaf'
}

/* Looping through images */
for (image of imgArr) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `imgArr/${image}`);
    newImage.setAttribute('alt', imgAlt[image]);
    thumbBar.appendChild(newImage);
    thumbBar.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const buttonClass = btn.getAttribute('class');
    if (buttonClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
    }   else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgb(0,0,0,0)';
    }
})
