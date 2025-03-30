const message = document.getElementById("message");

document.querySelectorAll("code").forEach((el, i) => {
    const button = document.createElement("button");
    button.setAttribute("class", "btn")
    button.textContent = "<<COPY>>";
    button.accessKey = "text" + i;
    button.onclick = copy;
    el.appendChild(button);
});

document.querySelectorAll("div.copy").forEach((el, index) => {
    el.id = "text" + index;
});

async function copy(a){
    const key = a.target.accessKey
    const wordToCopy = document.getElementById(key);
    if (navigator.clipboard != undefined){
        await navigator.clipboard.writeText(wordToCopy.outerText) 
        .then (onfulfilled = (message) => {
            showSuccess("Copying...");
        }).catch(err => {
            showFailure(err);
        }).finally((err) => {
            setTimeout(done, 1000, err)
        })
    } else {
        await unsecuredCopyToClipboard.writeText(wordToCopy.outerText) 
        .then (onfulfilled = (message) => {
            showSuccess("Copying...");
        }).catch(err => {
            showFailure(err);
        }).finally((err) => {
            setTimeout(done, 1000, err)
        })
    }
   
}

function showFailure(message){
    pasteMessage(message);
}

function showSuccess(message){
    pasteMessage(message);
}

function done(e){
    if (!e){
        e = "Done"
    }
    pasteMessage(e);
}

function pasteMessage(message){
    document.getElementById("message").textContent = message;
    document.getElementById("message").style.opacity = 10;
}

function reduce_opacity(){
    if (message.style.opacity > 0){
        message.style.opacity -= 0.1
    } else {
        message.style.opacity = 0
    }
    setTimeout(reduce_opacity, 10)
}

reduce_opacity()