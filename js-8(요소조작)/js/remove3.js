const pspan = document.querySelectorAll("p > span")   // 모든 삭제버튼을 가져옴

for(let span_ of pspan) {                             // 항목 클릭시 실행하는 함수
   span_.addEventListener("click", function() {       // 부모 노드에서 삭제함
      this.parentNode.remove(this)
   })
}
