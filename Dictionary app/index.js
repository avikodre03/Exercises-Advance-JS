const inputValue = document.getElementById("inputValue")
const def = document.getElementById("def")

async function func() {
    const input = inputValue.value
    // console.log(input);
    const Responce = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    const data = await Responce.json()
    console.log(data);
    def.innerHTML = data[0].shortdef[0]

}