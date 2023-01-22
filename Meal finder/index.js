const input = document.getElementById("input")
const photosContainer = document.getElementById("photosContainer")


async function func() {
    const inputValue = input.value

    if (inputValue == "") {
        photosContainer.innerHTML = ""

    } else {

        const Responce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        const data = await Responce.json()
        console.log(data.meals);

        photosContainer.innerHTML = ""
        data.meals.map((ele) => {
            const MealImg = ele.strMealThumb
            const strMeal = ele.strMeal
            console.log(MealImg);

            photosContainer.innerHTML += `
        <div>
        <img src="${MealImg}" >
      
        <figcaption>${strMeal}</figcaption>
        </div>
        `
        })
    }
}
