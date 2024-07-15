const title = document.querySelector("#title")
const author = document.querySelector("#author")
const aibooklist = document.querySelector("#aibooklist")
const save = document.querySelector("#save")

save.addEventListener("click", (e) => {
    e.preventDefault()
    
    const newli = document.createElement("li")
    newli.innerHTML = `
    ${title.value} - ${author.value}
    <span class="delBtn">삭제</span>
    `
    aibooklist.appendChild(newli)

    title.value = ""
    author.value = "" 

    // 목록에서 제거하기
    const delBtns = document.querySelectorAll(".delBtn")

    for(let delBtn of delBtns) {
        delBtn.addEventListener("click", function() {
            /* this.parentNode.removeChild(this.parentNode) */
            let liList = this.parentNode
            liList.parentNode.removeChild(liList)
})}
})




