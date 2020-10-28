// Bài 1:
// Cách 1:
const getRepeatArray = (array, number) => {
  for (let i = 0; i < number; i++) {
    console.log(array)
  }
}

// Cách 2:
const getrepeatArrayVer2 = (array, number) => {
  let index = 0
  while (index < number) {
    console.log(array)
    index++
  }
}

// Bài 2:
const getReverseArray = array => {
  let reverseArray = []
  let j = 0
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray[j++] = array[i] 
  }
  console.log(reverseArray)
}

// Bài 3:
const removeValue = array => {
  const valuesToRemove = [null, undefined, false, '', 0]
  const newArray = array.filter(itemArray => !valuesToRemove.includes(itemArray))
  console.log(newArray)
}

// Bài 4:
const creatObject = (array = []) => {
  const newObject = {}
  array.forEach(item => {
    newObject[item [0]] = item [1]
  })
  return newObject
}

// Bài 5:
const sortArray = array => {
  for (let i = 0; i <= array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let swap = 0
        swap = array[i]
        array[i] = array[j]
        array[j] = swap
      }
    }
  }
  return array
}

// Bài 6:
const checkObject = object => {
  typeof object === 'object' ? true : false
}

// Bài 7:
const getKeyObject = (object, arrayKey) => {
  arrayKey.forEach(item => {
    for (let key in object) {
      if (key === item) {
        delete(object[key])
      }
    }
  })
  return object
}

// Bài 8:
const deleteElement = array => {
  if (array.length > 5) {
    array.splice(1, 2)
    return array
  } else {
    console.log('Mảng phải lớn hơn 5 phần tử')
  }
}

// Bài 9:
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]

const checkName = array => array.name.split(' ')[1].indexOf('Duy') !== 0
const passCondition = array => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].score > 5 && checkName(array[i])) {
      newArray.push('Pass')
    } else {
      newArray.push('Fail')
    }
  }
  return newArray
}

// Bài 10:
const findStudents = array => {
  let newArray = []
  array.forEach(item => {
    let numberOfTens = Math.floor(array.score)
    let numberOfUnits = (array.score - Math.floor(array.score)) * 10
    let sum = numberOfTens + numberOfUnits
    if (sum > 10) {
      newNumber = sum - 10
      if (newNumber > 5) {
        newArray.push(students)
      } 
    } else if (sum > 5) {
        newArray.push(students)
    }
  })
  return newArray
}