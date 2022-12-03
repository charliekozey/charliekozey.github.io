const postBoxes = document.getElementsByClassName("post-box")
let tagArray = []

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
        
        if (!tagArray.includes(tagText)) {
            tagArray.push(tagText)
            tagBar.append(barTag)
        }
        
        postTagDiv.append(postTag)
    })
}

