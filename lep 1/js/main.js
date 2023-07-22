// const wrapper = document.querySelector('.wrapper')
//
// const obj = {
//     name :'Wool',
//     age: 66
// }
//
// const json = JSON.stringify(obj)
//
// const newObj = JSON.parse(json)
//
// console.log(json)
// console.log(newObj)


const btn = document.querySelector('.btn')
const wrapper = document.querySelector('.wrapper')

btn.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "peoples.json")
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send()
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)

        data.map(item => {
            const block = document.createElement('div')
            block.classList.add('tyu')
            block.innerHTML = 'Name: ' + item.name + ' Age: ' + item.age
            wrapper.append(block)
        })

    })
})

const btn1 = document.querySelector('.btn1')

btn1.addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "fruit.json")
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send()
    xhr.addEventListener('load', () => {
        const data = JSON.parse(xhr.response)
        data.map(item => {
            console.log(item)
        })

    })
})

