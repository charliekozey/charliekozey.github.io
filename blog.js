const postBoxes = document.getElementsByClassName("post-box")
let allTags = []
let clickedTag

for (postBox of postBoxes) {
    appendTagsToBarAndPost(postBox)
}

function appendTagsToBarAndPost(postBox) {
    // get array of tag names from class name
    const postBoxClassName = postBox.attributes.class.value
    const individualTags = postBoxClassName.split(" ").slice(1)
    const tagBar = document.querySelector(".tag-bar")
    
    individualTags.forEach(tagText => {
        const barTag = document.createElement("span")
        const postTag = document.createElement("span")
        const postTagDiv = postBox.children[1].children[1]

        barTag.textContent = tagText
        barTag.className = "tag"

        postTag.textContent = tagText
        postTag.className = "tag"
        
        if (!allTags.includes(tagText)) {
            allTags.push(tagText)
            tagBar.append(barTag)
        }
        
        postTagDiv.append(postTag)
        barTag.addEventListener("click", e => {
            clickedTag = tagText
            filterByTag(individualTags, tagText)
        })
    })
}

function filterByTag(individualTags, tagText) {
    console.log(individualTags)
    // for (postBox of postBoxes) {
    //     if (tagArray.includes(tagText)) {
    //         console.log(postBox)
    //     }

    //     postBox.style.display = "none"
    // }

}

