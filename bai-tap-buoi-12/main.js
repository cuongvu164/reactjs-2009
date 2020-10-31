// Exercise 1:
 const isEqual = (arr1, arr2) => JSON.stringify(arr1)==JSON.stringify(arr2) ? true : false

// Exercise 2:
const newArray = []
const flattenArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenArray(array[i])
    } else {
      newArray.push(array[i])
    }
  }
  return newArray
}

// Exercise 3:
const chunksArray = (array, size) => {
  let newArray = []
  while (array.length) {
    newArray.push(array.splice(0, size))
  }
  return newArray
}

// Exercise 4:
const findDuplicatesArray = array => {
  const duplicatesArray = []
  const uniqueArray = []
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i])
    } else {
      duplicatesArray.push(array[i])
    }
  }
  return duplicatesArray
}

const intersectionArray = (array1, array2, array3 = []) => {
  const unifyArray = [ ...array1, ...array2, ...array3 ]
  return findDuplicatesArray(unifyArray)
}

// Exercise 5:
const findDiscountInvoices = date => {
  const discountTime = new Date('Oct 30, 2020 12:30:32')
  return Date.parse(date) <= Date.parse(discountTime) ? true : false
}

// Exercise 6:
const checkEmail = email => {
  const regexEmail = /^[a-z0-9]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z]*[a-z])?\.)+[a-z](?:[a-z]*[a-z])?$/i
  return regexEmail.test(email)
}

const checkUserName = user => {
  const regexUserName = /^([a-z0-9_]){2,10}$/
  return user.indexOf('__') === -1 ? regexUserName.test(user) : false
}

