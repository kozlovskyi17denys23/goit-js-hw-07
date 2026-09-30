'use strict'

const categoryItems = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const categoryCount = item.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryCount}`);
})

