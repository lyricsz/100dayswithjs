export function DiagForColorPicker(){
    window.addEventListener("keypress", (e) => {
        console.log(e)
        if (e.code == "KeyD"){
            colorPicker();    
        }
    }, )
}

function colorPicker(){
    const tempEl = document.getElementById("colorPickerContainer");

    if (tempEl != undefined || tempEl != null){
        if (tempEl.style.display == "none"){
            tempEl.style.display = "block";
        } else if (tempEl.style.display != "none"){
            tempEl.style.display = "none"
        }
        return
    } else {

        const container = document.createElement("div");

        const labelText = ["Background Color: ", "Text Color: ", "Code Color: "];
        
        const colorElArray = [];
        const name = ["text_color", "background_color", "code_color"];

        name.forEach((name, index) => {
            const el = document.createElement("input");
            el.type = "color";
            el.onchange = fixColor
            el.name = name;
            el.id = "color" + index;
            colorElArray.push(el);
        });

        labelText.forEach((text, index) => {
            const el = document.createElement("label");
            el.textContent = text;
            el.appendChild(colorElArray[index])
            container.appendChild(el);
        });
        
        container.id = "colorPickerContainer";

        document.body.appendChild(container);

    }

}

function fixColor(e){
    console.log(e.target.value)
    if (e.target.id == "color0"){
        document.body.style.backgroundColor = e.target.value;
        document.querySelectorAll("h2").forEach(el => {
            const code = hexToRgb(e.target.value);
            code.r = code.r + 20 > 256 ? 256 : code.r + 20;
            code.g = code.g + 10 > 256 ? 256 : code.g + 10;
            code.b = code.b;
            el.style.backgroundColor = "rgb( " + [...[code.r, code.g, code.b]].toString() + ")"
        });
    }
    else if (e.target.id == "color1") {
        document.body.style.color = e.target.value + "!important";
    } else if (e.target.id == "color2"){
        document.querySelectorAll("code").forEach(el => {
            el.style.color = e.target.value;
        })
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

