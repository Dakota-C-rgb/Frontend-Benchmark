const upvotes = document.querySelectorAll("#posts")
const item = document.querySelectorAll("#unordered_list")

for (const button of upvotes) {
    const addOne = button.querySelector("#like_button")
    addOne.addEventListener('click', () => {
        const id = document.querySelector("#divd")
        const url = `entries/${id}/like`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const number = data.querySelector("#number_likes")
                number.textContent = Number(number.textContent) += 1;
            })
    })
}