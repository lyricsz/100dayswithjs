let alert = 10 / 1
let key = ''

function copy(a = {key: "HELLO", id: "WOW"}){
    let {id, key} = a

    console.log(id, key, alert)

    console.log(typeof introduction) 
}

new Promise(() => copy()).finally(() => {
    alert("Works!!!")
})