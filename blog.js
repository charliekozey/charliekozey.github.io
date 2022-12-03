// grab all the postBoxes
const postBoxes = document.getElementsByClassName("post-box")
// keep track of all unique tags
let uniqueTags = []


for (postBox of postBoxes) {
    appendTagsToPost(
        getTagsFromClassName(postBox), 
        postBox
    )

    appendTagsToBar(
        getTagsFromClassName(postBox),
        postBox
    )
}

// get array of tag names from class name
function getTagsFromClassName(postBox) {
    const postBoxClassName = postBox.attributes.class.value
    const individualTags = postBoxClassName.split(" ").slice(1)
    
    return individualTags
}

// append tags to each postBox
function appendTagsToPost(individualTags, postBox) {
    // grab the div on postBox where tags will go
    const postTagDiv = postBox.children[1].children[1]
        
    individualTags.forEach(tag => {
        //create a new tag span, label it, and populate it
        const postTag = document.createElement("span")
        postTag.className = "tag"
        postTag.textContent = tag
        
        // append tag to div
        postTagDiv.append(postTag)
    })
}

// append tags to tag bar
function appendTagsToBar(individualTags, postBox) {
    
    individualTags.forEach(tag => {
        // grab the bar
        // make a tag span to go in the bar
        const tagBar = document.querySelector(".tag-bar")
        const barTag = document.createElement("span")

        // populate tag with its name and label the tag's class
        barTag.textContent = tag
        barTag.className = "tag"
        
        // add tag to the unique tag array if it's not already there
        // then append it to tag bar
        if (!uniqueTags.includes(tag)) {
            uniqueTags.push(tag)
            tagBar.append(barTag)
        }
        
        // make bar tag clickable
        barTag.addEventListener("click", e => {
            // pass in currently clicked tag
            // pass in array of tags on current postBox
            // pass in current postBox
            for (postBox of postBoxes) {

                filterByTag(
                    tag, 
                    getTagsFromClassName(postBox), 
                    postBox
                )
            }
        })
    })
}

function filterByTag(clickedTag, postTagArray, postBox) {
    
    // reset to display all postBoxes again
    // (it's for after one tag is already clicked)
    for (item of postBoxes) {
        item.style.display = "none"
        item.style.display = "inline"
    }

    // if the clicked tag is not on a post, hide that post
    if (!postTagArray.includes(clickedTag)) {
        console.log(postBox)
        postBox.style.display = "none"
    }
}

