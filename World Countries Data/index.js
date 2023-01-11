var subHeading = document.getElementById("subheading")

subHeading.innerText = `Currently, We have ${countries_data.length} Countries`

const GraphTitle = document.getElementById("graphTitle")

const sortedpopulation = countries_data.sort(function (a, b) {
    return b.population - a.population

})


let totalpopulation = 0
for (let i = 0; i < countries_data.length; i++) {
    totalpopulation += countries_data[i].population


}

const clear = document.getElementById("graph")

function buttonOneClicked() {
    clear.innerHTML = " "
    GraphTitle.innerText = "10 most populated countries in world"

    const pp1 = document.getElementById("pp1")
    pp1.innerText = "Country Name"
    const pp2 = document.getElementById("pp2")
    pp2.innerText = "Percentages %"
    const pp3 = document.getElementById("pp3")
    pp3.innerText = "Population"

    for (let i = 0; i < 10; i++) {
        const onediv = document.createElement("div")
        onediv.classList.add("onediv")

        const countriesName = document.createElement("p")
        countriesName.innerText = sortedpopulation[i].name
        countriesName.style.width = "20%"

        onediv.appendChild(countriesName)

        const percentdiv = document.createElement("div")
        percentdiv.classList.add("percentdiv")

        const percentagediv = document.createElement("div")
        percentagediv.classList.add("percentagediv")

        const percentage = (sortedpopulation[i].population / totalpopulation) * 100
        percentagediv.style.width = `${percentage}%`
        percentagediv.innerText = `${percentage.toFixed(2)}%`

        percentdiv.appendChild(percentagediv)
        onediv.appendChild(percentdiv)

        const populationdiv = document.createElement("div")
        populationdiv.innerText = sortedpopulation[i].population
        onediv.appendChild(populationdiv)

        const graphdiv = document.getElementById("graph")
        graphdiv.appendChild(onediv)
    }
}

function buttonTwoClicked() {
    clear.innerHTML = " "
    GraphTitle.innerText = "10 most spoken languages in world"

    const pp1 = document.getElementById("pp1")
    pp1.innerText = "Languages Name"
    const pp2 = document.getElementById("pp2")
    pp2.innerText = "Percentages %"
    const pp3 = document.getElementById("pp3")
    pp3.innerText = "No. of Countries"

    const languagesArray = []

    for (let i = 0; i < countries_data.length; i++) {
        languagesArray.push(countries_data[i].languages)
    }

    const flatedLanguagesArray = languagesArray.flat()

    const languagesCount = {}
    flatedLanguagesArray.map((ele) => {
        languagesCount[ele] = (languagesCount[ele] || 0) + 1

    })


    const objArr = Object.entries(languagesCount)


    const sortedArray = objArr.sort((a, b) => {
        return b[1] - a[1]

    })

    for (let i = 0; i < 10; i++) {
        const topTenValuesFromSortedArr = sortedArray[i]

        const onediv = document.createElement("div")
        onediv.classList.add("onediv")


        const countriesName = document.createElement("p")
        countriesName.innerText = topTenValuesFromSortedArr[0]
        countriesName.style.width = "20%"

        onediv.appendChild(countriesName)

        const percentdiv = document.createElement("div")
        percentdiv.classList.add("percentdiv")

        const percentagediv = document.createElement("div")
        percentagediv.classList.add("percentagediv")

        const percentage = (topTenValuesFromSortedArr[1] / sortedArray.length) * 100
        percentagediv.style.width = `${percentage}%`
        percentagediv.innerText = `${percentage.toFixed(2)}%`

        percentdiv.appendChild(percentagediv)
        onediv.appendChild(percentdiv)

        const populationdiv = document.createElement("div")
        // populationdiv.style.width="20%"
        // populationdiv.style.border="2px solid yellow"
        populationdiv.innerText = topTenValuesFromSortedArr[1]
        onediv.appendChild(populationdiv)

        const graphdiv = document.getElementById("graph")
        graphdiv.appendChild(onediv)
    }
}