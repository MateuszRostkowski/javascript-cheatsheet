"use strict";

const headings = document.querySelectorAll('.cheat-title')
const contents = document.querySelector('.table-of-contents')

for(let i = 0; i < headings.length; i++) {
    const listItem = document.createElement('li')
    const link = document.createElement('a')

    link.setAttribute('href', `#cheat-title-${i + 1}`)
    listItem.innerHTML = headings[i].innerText

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    link.appendChild(listItem)
    contents.appendChild(link)
}

const scrollToTop = document.querySelector('#scroll-to-top')

scrollToTop.addEventListener(
    'click',
    () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
