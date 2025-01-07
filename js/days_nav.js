const select = document.getElementById("select");

select.onchange = (e) => {
    setTimeout(() => {
        window.location = "./../" + select.value;
    });
}

for(i = 0; i < 100; i++){
    const option = document.createElement('option');
    option.value = "day" + (i + 1);
    if(i == select.name){
        option.selected = true;
        option.disabled = true;
    }
    option.textContent = "Day " + (i + 1);
    option.style.color = "gray"
    select.appendChild(option);
}