// Exercise 1:
const getSum = (first, second) => {
  let sum = 0
  first = document.getElementById('first')
  second = document.getElementById('second')
  sum = parseInt(first.value) + parseInt(second.value)
  document.getElementById('result').innerHTML = 'Tổng = ' + sum
}

// Exercise 2:
const handleOnMouseClick = event => {
  const currentEle = event.target
  if (currentEle.style.background === 'red') {
    currentEle.style.background = 'green'
  } else {
    currentEle.style.background = 'red'
  }
}

// Exercise 3:
const changedOption = () => {
  let value = document.getElementById("electric").value
  if (value === 'laptop') {
    document.getElementById('showOptionLaptop').style.display = 'block'
    document.getElementById('showOptionPhone').style.display = 'none'
    document.getElementById('showOptionTV').style.display = 'none'
  }
  else if (value === 'phone') {
    document.getElementById('showOptionPhone').style.display = 'block'
    document.getElementById('showOptionLaptop').style.display = 'none'
    document.getElementById('showOptionTV').style.display = 'none'
  }
  else {
    document.getElementById('showOptionTV').style.display = 'block'
    document.getElementById('showOptionPhone').style.display = 'none'
    document.getElementById('showOptionLaptop').style.display = 'none'
  }
}

// Exercise 4:
const menu = [
  {
    name: 'Home',
    children: [
      {
        name: 'Home 1',
        children: [
            {
              name: 'Home 1.1',
              children: [
                { name: 'Home 1.1.1' }
              ]
            },
            {
              name: 'Home 1.2',
              children: [
                { name: 'Home 1.2.1' }
              ]
            }
        ]
      },
      {
        name: 'Home 2',
        children: [
            {
              name: 'Home 2.1'
            }
        ]
      },
      {
        name: 'Home 3',
        children: [
            {
              name: 'Home 3.1'
            }
        ]
      }
    ]
  },
  {
    name: 'About',
    children: [
      {
        name: 'About 1',
        children: [
          {
              name: 'About 1.1',
              children: [
                  { name: 'About 1.1.1' }
              ]
          },
          {
            name: 'About 1.2',
            children: [
              {
                name: 'About 1.2.1',
                children: [
                  { name: 'About 1.2.1.1' },
                  { name: 'About 1.2.1.2' },
                  { name: 'About 1.2.1.3' }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [
          {
            name: 'Home 2.1'
          }
        ]
      }
    ]
  }
]

const showMenu = () => {
  const toggler = document.getElementsByClassName("caret")
  for (let i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active")
    })
  }
}
