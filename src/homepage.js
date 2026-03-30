function loadIndex() {
    let h1 = document.createElement("h1")
    h1.textContent = "This is a homepage for my restaraunt!"
    
    let content = document.querySelector("#content")
    
    content.append(h1);
}

export {loadIndex}