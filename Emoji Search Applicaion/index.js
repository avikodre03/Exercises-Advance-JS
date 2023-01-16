function searchEmoji() {
    const input = document.getElementById("input").value


    const tagsArr = []
    emojiList.map((ele) => {

        if (ele.tags.includes(input)) {
            tagsArr.push(ele)
            const table = document.getElementById("tableData")
            console.log(table);
            table.innerHTML +=
                table.innerHTML +=
                `<tr class="tableRow" >
                <td id="emojiIcons">${ele.emoji}</td>
                <td id="emojiNames">${ele.aliases}</td>
                <td id="emojiTags">${ele.description}</td>
        </tr>   `
        }
    })
    console.log(tagsArr);
}


function searchEmojiKeyUp() {
    const table = document.getElementById("tableData")
    table.innerHTML = ""

    const input = document.getElementById("input").value

    const tagsArr = []
    emojiList.map((ele) => {
        ele.tags.map((elements) => {
            if (elements.startsWith(input)) {
                tagsArr.push(ele)

                console.log(table);
                table.innerHTML +=
                    `<tr class="tableRow" >
                    <td id="emojiIcons">${ele.emoji}</td>
                     <td id="emojiNames">${ele.aliases}</td>
                      <td id="emojiTags">${ele.description}</td>
                </tr> `
            }
        })
    })

}
