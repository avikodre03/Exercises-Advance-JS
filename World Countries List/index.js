const numberOfCountries = document.getElementById("numberOfCountries")
numberOfCountries.innerText = `Total Number Of Countries: ${countries_data.length}`

const CountriesName = []
countries_data.map((ele) => {

    CountriesName.push(ele.name.toLowerCase())
})


function startingSearchFunction() {
    const countryCardContanr = document.getElementById("countryCardContanr")
    const inputElement = document.getElementById("countryNameInput")
    inputElement.setAttribute("onkeyup", "startingSearchFunction()")

    const input = document.getElementById("countryNameInput").value
    countryCardContanr.innerHTML = ""

    const matchedCountries = []

//  using map >>>>>>>>>>>>>>>
    CountriesName.map((ele) =>{
         const hello = ele.startsWith(input.toLowerCase())
         if (input == "") {   
            countryCardContanr.innerHTML = `
                <div style="background-color:red; color:white; height: fit-content;" >
                    <h1>Please enter a word</h1>
                </div>
                `
        } else{

            if (hello) {
    
                matchedCountries.push(ele)
                countryCardContanr.innerHTML +=
                    `<div class="countryCardContanrdiv", >
               <p>${ele.toUpperCase()}</p>
               </div>`
            }
            const numberofSearchResult = document.getElementById("numberOfSearchResult")
            numberofSearchResult.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
        }
    })

    // for (let i = 0; i < CountriesName.length; i++) {
    //     const hello = CountriesName[i].startsWith(input.toLowerCase())

    //     if (hello) {

    //         matchedCountries.push(CountriesName[i])
    //         countryCardContanr.innerHTML +=
    //             `<div class="countryCardContanrdiv", >
    //        <p>${CountriesName[i].toUpperCase()}</p>
    //        </div>`
    //     }
    //     const numberofSearchResult = document.getElementById("numberOfSearchResult")
    //     numberofSearchResult.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
    // }
}

function searchAnyWord() {
    const countryCardContanr = document.getElementById("countryCardContanr")

    countryCardContanr.innerHTML = ""
    const inputElement = document.getElementById("countryNameInput")
    inputElement.setAttribute("onkeyup", "searchAnyWord()")

    const input = document.getElementById("countryNameInput").value

    const matchedCountries = []

    // using map >>>>>>>>>>>>>>>
    CountriesName.map((ele) =>{
        const hello = ele.includes(input.toLowerCase())
        if (input == "") {   
            countryCardContanr.innerHTML = `
                <div style="background-color:red; color:white">
                    <h1>Please enter a word</h1>
                </div>
                `
        } else{

        if (hello) {

            matchedCountries.push(ele)
            countryCardContanr.innerHTML +=
                `<div class="countryCardContanrdiv", >
           <p>${ele.toUpperCase()}</p>
           </div>`
        }

        const numberofSearchResult = document.getElementById("numberOfSearchResult")
    }
    })

    // for (let i = 0; i < CountriesName.length; i++) {
    //     const hello = CountriesName[i].includes(input.toLowerCase())

    //     if (hello) {

    //         matchedCountries.push(CountriesName[i])
    //         countryCardContanr.innerHTML +=
    //             `<div class="countryCardContanrdiv", >
    //        <p>${CountriesName[i].toUpperCase()}</p>
    //        </div>`
    //     }
    //     const numberofSearchResult = document.getElementById("numberOfSearchResult")
    //     numberofSearchResult.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
    // }
}