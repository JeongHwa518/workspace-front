const students = ["홍길동", "이순신", "신사임당", "이성계"]
for(let i = 0; i < students.length; i++)
    document.write(`${students[i]}, `)

document.write('<br></br>')

students.forEach(function(student) {
    document.write(`${student}, `)
})

document.write('<br></br>')

const proBaseStadium = {
    name : "라이온스파크",
    date : "2024-07-04", 
    customer : 20000,
    finished : true
}

for(key in proBaseStadium) {
    document.write(`${key} : ${proBaseStadium[key]}<br>`)
}

for (student of students) {
    document.write(`${student}, `)
}

let stars = parseInt(prompt("별의 개수 입력 : "))
while(stars > 0) {
    document.write('*')
    stars--
}

document.write('<br></br>')

stars = parseInt(prompt("별의 개수 입력2 : "))
do {
    document.write('*')
    stars--
} while(stars > 0)