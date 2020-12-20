"use strict"

const mainId = document.querySelector('.first');
console.log(mainId.childNodes)
console.log(mainId.children)

for (let node of mainId.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
} 