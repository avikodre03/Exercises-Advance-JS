const quote = document.getElementById("quote")
const auther = document.getElementById("auther")

async function nextQuote() {

    const Response = await fetch("https://api.quotable.io/random")
    const data = await Response.json()
    console.log(data);
    quote.innerHTML = `<i class="fa-solid fa-quote-left"></i>${data.content}<i class="fa-solid fa-quote-right"></i>`
    auther.innerHTML = `~ ${data.author}`
}

nextQuote()