const searchInput = document.getElementById("searchBox")
const profileContainer = document.getElementById("profileContainer")
// console.log(profileContainer);

async function func2() {
    const Responce = await fetch("https://api.github.com/users")
    // console.log(Responce);
    const data = await Responce.json()

    profileContainer.innerHTML = ""

    data.map((ele) => {
        const userName = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        // console.log(userName, avatar, profile);

        profileContainer.innerHTML += `
        <div class="innerDiv">
        <img src="${avatar}" >

          <div>
            <h3>${userName}</h3>
             <a href="${profile}">View profile</a>
           </div>

        </div>
        `
    })
}
func2()

async function func() {
    const searchValue = searchInput.value
    const Responce = await fetch(`https://api.github.com/search/users?q=${searchValue}`)
    const data = await Responce.json()
    console.log(data.items);

    profileContainer.innerHTML = ""

    data.items.map((ele) => {
        const userName = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        console.log(userName, avatar, profile);

        profileContainer.innerHTML += `
        <div class="innerDiv">
        <img src="${avatar}" >

          <div>
            <h3>${userName}</h3>
             <a href="${profile}">View profile</a>
           </div>

        </div>
        `
    })
}

function clearFunc() {
    profileContainer.innerHTML = ""
    searchInput.value = ""
    func2()
}