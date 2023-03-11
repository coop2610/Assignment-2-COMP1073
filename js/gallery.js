/*

	Assignment 2 | COMP1073-02 Client-Side JavaScript

	Group Members: 
	Abimbola Fasawe - 200472319
	Amanda Cooper - 200507894 
change
*/

//Select the needed elements
const largeImage = document.querySelector('img');
const smallImages = document.querySelector('ul');
const page = document.querySelector('html');
const figCap = document.querySelector('figcaption');
figCap.textContent = 'Which is your favourite flower?';

//Function to change large image display
function changeImage(value){
    largeImage.setAttribute('src', value);
}

//Add Event listener to chnage the large image when a small one is selected
smallImages.addEventListener('click', function(event){
    if (event.target && event.target.nodeName === 'IMG'){
        let newSrc = event.target.getAttribute('src');
        changeImage(newSrc.replace('small', 'large'));
    }
    //Change figcaption and background colour depending on large image
    switch (event.target.getAttribute('src')){
        case 'images/flowers-pink-small.jpg':
            page.style.backgroundColor = '#FADBFF';
            figCap.textContent = 'Pink Flowers!';

            break;
        case 'images/flowers-purple-small.jpg':
            page.style.backgroundColor = '#E7DBFF';
            figCap.textContent = 'Purple Flowers!';
            break;
        case 'images/flowers-red-small.jpg':
            page.style.backgroundColor = '#FFDBDB';
            figCap.textContent = 'Red Flowers!';
            break;
        case 'images/flowers-white-small.jpg':
            page.style.backgroundColor = 'white';
            figCap.textContent = 'White Flowers!';
            break;
        case 'images/flowers-yellow-small.jpg':
            page.style.backgroundColor = '#FFF7DB';
            figCap.textContent = 'Yellow Flowers!';
            break;
    }
});





