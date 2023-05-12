// sets random number to zero
var randoNum = 0

// Picks a random number between 1 & 5
function pickRandoNum(min, max) {
    // defines the min & max numbers for the machine to choose from
    min = 1
    max = 4

    // Sets the Random Number to the chosen random number
    randoNum = Math.floor(Math.random() * (max+1) ) + min;

    // Converts random number to an integer
    randoNum = parseInt(randoNum)

    // Use for testing the random number results
    //document.getElementById('randoResults').innerHTML = randoNum;
}


function changeColor() {
    /* This works to color text
    document.getElementById('button').style.color= "blue";
    */
   
    //Declares constants for the Head & Body of the themes html page
    const body = document.getElementById('themeBody');
    const head = document.getElementById('themeHead');


    // Creates a constant for content paragraph
    const themeContent = document.getElementById('content');
    // Creates a constant for theme page title
    const themeTitle = document.getElementById('title');


    // Creates a constant for theme button
    const button = document.getElementById('button');


    // Creates a constant for the Navigation background
    const navHead = document.getElementById('navHeader');
    // Creates constants for all the navigation links
    const navLinks = document.querySelectorAll('a.navA');


    // Calls function to pick a random number
    pickRandoNum();


    /* Styles the webpage with the theme that's tied to 
    that chosen random number */
    if(randoNum == 1) { // Cotton Candy Theme
        // Colors the background of webpage
        body.style.backgroundColor= '#fafcfb';
        head.style.color= '#fafcfb';

        
        // Colors the content paragraph
        themeContent.style.color= '#ceb2b9';

        // Colors the title for the webpage
        themeTitle.style.color= '#dfb9b6fb';

        
        // Colors the background of the nav bar
        navHead.style.backgroundColor= '#d0e1e8c5';
        
        // Colors the links for the nav bar
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#a0b4c2'
        }

        
        // Colors the theme button
        button.style.color = '#a0b4c2';
    } if(randoNum == 2) { // Matcha Theme
        // Colors the background of webpage
        body.style.backgroundColor= '#f2f5ed';
        head.style.color= '#f2f5ed';

        
        // Colors the content paragraph
        themeContent.style.color= '#8f9970d7';
        
        // Colors the title for the webpage
        themeTitle.style.color= '#98b88dd3';

        
        // Colors the background of the nav bar
        navHead.style.backgroundColor= '#e8f0d5d3';
        
        // Colors the links for the nav bar
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#7a9c57c0'
        }

        

        
        // Colors the theme button
        button.style.color = '#7a9c57c0';
    } if(randoNum == 3) { // Pink Wildflower Theme
        // Colors the background of webpage
        body.style.backgroundColor= '#fef9f8';
        head.style.color= '#fef9f8';

        
        // Colors the content paragraph
        themeContent.style.color= '#dab4b6';
        
        // Colors the title for the webpage
        themeTitle.style.color= '#b8acc5';

        
        // Colors the background of the nav bar
        navHead.style.backgroundColor= '#f5dfe3fa';
        
        // Colors the links for the nav bar
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#b8acc5'
        }

        
        // Colors the theme button
        button.style.color = '#b8acc5e1';
    } if(randoNum == 4) { // Purple Dream Theme
        // Colors the background of webpage
        body.style.backgroundColor= '#fffdf6';
        head.style.color= '#fffdf6';

        // Colors the content paragraph
        themeContent.style.color= '#62478dd8';
        
        // Colors the title for the webpage
        themeTitle.style.color= '#949ab1';

        
        // Colors the background of the nav bar
        navHead.style.backgroundColor= '#e2d4e0';
        
        // Colors the links for the nav bar
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#7c7e9de7'
        }

        
        // Colors the theme button
        button.style.color = '#7c7e9dd8';
    } if(randoNum == 5) { // Moss Theme
        // Colors the background of webpage
        body.style.backgroundColor= '#fffdf6';
        head.style.color= '#fffdf6';

        // Colors the content paragraph
        themeContent.style.color= '#9da59fee';
        
        // Colors the title for the webpage
        themeTitle.style.color= '#a3b8b1e8';

        
        // Colors the background of the nav bar
        navHead.style.backgroundColor= '#dde0cce5';
        
        // Colors the links for the nav bar
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = '#91a897'
        }

        
        // Colors the theme button
        button.style.color = '#91a897ec';
    }
}

