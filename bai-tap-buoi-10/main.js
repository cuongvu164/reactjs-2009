// Bài 1:
const showMultiplicationTable = number => {
  for (let i = 1 ; i <= 10; i++) {
    let sum = 0
    sum = i * number;
    console.log(`${i} * ${number} = ` + number * i);   
  }
}

// Bài 2:
const getNumberEven = number => {
  if (number >= 1 && number <= 30) {
    for (let i = 1; i <= number; i++) {
      if (i % 2 == 0){
        console.log(i)
      }
    }
  } else {
    console.log('Nhap trong khoang 1-30')
  }
}

// Bài 3:
const getSum = number => {
  if (number >= 1 && number <= 30) {
    let sum = 0
    for (let i = 1; i <= number; i++) {
      sum += i
    }
    console.log('Tong = ' + sum)
  } else {
    console.log('Nhap trong khoang 1-30') 
  }
}

// Bài 4:
const getFactorial = number => {
  if (number >= 1 && number <= 30){
    let factorial = 1
    for (let i = 1; i <= number; i++){
      factorial *= i
    }
      console.log(`${number}! = ` + factorial)
  } else {
      console.log('Nhap trong khoang 1-30')
  }
}

// Bài 5:
const countEvenNumbers = array => {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      count++
    }
  }
  return count
}

// Bài 6:
const uniqueArray = array => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i])
    }
  }
  return newArray
}

// Bài 7:
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]
const findStudentScore = id => {
  for (let i = 1 ; i <= studentScores; i++) {
    const student = studentScores[i]
    if (student.id === id) {
      return student.score
    }
  }
  return 0    
}

const validate = (studentNames, studentScores) => {
  return true
}
const studentObject = (studentNames, studentScores) => {
  // for (let i = 0; i < studentNames.length; i++) {
  //   for (let j = 0; j < studentScores.length; j++) {
  //     if (studentNames[i].id === studentScores[j].id){
  //       studentNames[i].score = studentScores[j].score
  //     }
  //   }
  // }
  // return studentNames
  //C2:
  if (validate(studentNames, studentScores)) return

  studentNames.forEach(student => {
    student.score = findStudentScore(student.id)
  })
  return studentNames
}

// Bài 8:
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const findMinMax = array => {
  let theBest = []
  let theBad = []
  let max = students[0].score
  let min = students[0].score
  for (let i = 1; i < students.length;i++) {
    if (min > students[i].score){
      min = students[i].score
    }
    if (max < students[i].score){
      max = students[i].score
    }
  }
  
  for (let i = 1; i < students.length; i++ ) {
    if (students[i].score === min){
      theBad.id = students[i].id
      theBad.name = students[i].name
      theBad.score = students[i].score
    }
    if (students[i].score === max) {
      theBest.id = students[i].id
      theBest.name = students[i].name
      theBest.score = students[i].score
    }
  }
  console.log(theBad)
  console.log(theBest)
}

