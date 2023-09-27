"use strict"


const tabs = document.querySelectorAll('.tab');
const textContents = document.querySelectorAll('.textContent');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        textContents.forEach(text => {
            text.classList.remove('active');
        });

        setTimeout(() => {
            textContents[index].classList.add('active');
        }, 300);
    });
});