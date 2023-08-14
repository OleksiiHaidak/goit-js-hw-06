// const elementsNumber = document.querySelector("#categories ul");
// console.log(`Number of categories: ${elementsNumber.length}`);


const mainElement = document.querySelector("#categories");
const elementsNumber = mainElement.children;
console.log(`Number of categories: ${elementsNumber.length}`);
 

const categoryCards = document.querySelectorAll(".item");
categoryCards.forEach(element => {
    const titleText = element.firstElementChild;
    const liEl = element.lastElementChild;
    console.log(`Category: ${titleText.textContent} 
Elements: ${liEl.children.length}`);
});