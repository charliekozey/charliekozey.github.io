const postBoxes = document.getElementsByClassName("post-box")

for (postBox of postBoxes) {
    grabChildNodes(postBox)
}

function grabChildNodes(postBox) {
    const childNodesArray = Array.from(postBox.childNodes[3].childNodes[3].childNodes)
    const tagBar = document.querySelector(".tag-bar")
    
    // console.log(tagBar)
    
    childNodesArray.forEach(node => {
        const nodeCopy = document.createElement("span")
        if (childNodesArray.indexOf(node) % 2 === 1) {
            nodeCopy.textContent = node.textContent
            nodeCopy.id = node.id
            nodeCopy.className = node.className
            tagBar.append(nodeCopy)
        }
    })
}