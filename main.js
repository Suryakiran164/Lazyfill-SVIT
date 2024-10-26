// ==UserScript==
// @name         Lazyfill - SVIT
// @namespace    https://github.com/Suryakiran164
// @version      1.0
// @description  Selecting any option in question 1 results selecting the same option in all the questions, for any queries - Github: Suryakiran164
// @author       Surya kiran
// @match        https://ec2-3-6-156-139.ap-south-1.compute.amazonaws.com/StudentMobileApp/FeedBack.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazonaws.com
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/Suryakiran164/Lazyfill-SVIT
// @supportURL   https://github.com/Suryakiran164/Lazyfill-SVIT/issues/new
// @date         2024-10-25
// ==/UserScript==


function setRadioChecked(groupIndex) {
    for (let i = 0; i <= 10; i++) {
        const radioButton = document.getElementById(`rdQ${i}_${groupIndex}`);
        if (radioButton) {
            radioButton.checked = true;
        }
    }
}

document.getElementById("rdQ1_0").addEventListener('click', function() {
    if (this.checked) {
        setRadioChecked(0);
    }
});

document.getElementById("rdQ1_1").addEventListener('click', function() {
    if (this.checked) {
        setRadioChecked(1);
    }
});

document.getElementById("rdQ1_2").addEventListener('click', function() {
    if (this.checked) {
        setRadioChecked(2);
    }
});

document.getElementById("rdQ1_3").addEventListener('click', function() {
    if (this.checked) {
        setRadioChecked(3);
    }
});

document.getElementById("rdQ1_4").addEventListener('click', function() {
    if (this.checked) {
        setRadioChecked(4);
    }
});

setTimeout(() => {
    alert("Thanks for using this script. Made with ❤️ by Suryakiran");
}, 60000);

/*

Lazyfill is made for lazy people like me :)
This is a very basic script and any modification of this script is appreciated.

For any queries, open an issues here - https://github.com/Suryakiran164/Lazyfill-SVIT/issues/new

*/
