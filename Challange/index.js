console.log('JS is running...')

const CARS = [{
    model: 'Audi A3',
    year: 2015,
    price: 25000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9LhhJMplFhD_9bgSM9wlV6_2pjWxaite4LJ_OnNkcfOYS7mLk&usqp=CAU'
}, {
    model: 'Audi A3',
    year: 2015,
    price: 25000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9LhhJMplFhD_9bgSM9wlV6_2pjWxaite4LJ_OnNkcfOYS7mLk&usqp=CAU'
}, {
    model: 'Audi A3',
    year: 2015,
    price: 25000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9LhhJMplFhD_9bgSM9wlV6_2pjWxaite4LJ_OnNkcfOYS7mLk&usqp=CAU'
}, {
    model: 'Audi A3',
    year: 2015,
    price: 25000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9LhhJMplFhD_9bgSM9wlV6_2pjWxaite4LJ_OnNkcfOYS7mLk&usqp=CAU'
}, {
    model: 'Audi A3',
    year: 2015,
    price: 25000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9LhhJMplFhD_9bgSM9wlV6_2pjWxaite4LJ_OnNkcfOYS7mLk&usqp=CAU'
}, {
    model: 'Audi A3',
    year: 2015,
    price: 25000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9LhhJMplFhD_9bgSM9wlV6_2pjWxaite4LJ_OnNkcfOYS7mLk&usqp=CAU'
}]

CARS.map((car) => {
    /* Saving the reference of our result div in the var resultDiv */
    const resultDiv = document.getElementById('result')
    /* Creating HTML Element */
    const container = document.createElement('div')
    const picture = document.createElement('img')
    const model = document.createElement('p')

    /* Setting the source attribute of the img element */
    picture.setAttribute('src', car.img)
    picture.setAttribute('class', 'car-img')

    /* Adding a Class to our container div, regarding the true or false value of our read property */
    container.setAttribute('class', 'car')

    /* Setting the value of our paragraphs */
    model.innerText = car.model

    /* Appending the Elements to our Container DIV */
    container.appendChild(model)
    container.appendChild(picture)

    /* Appending our Container DIV to our Results DIV */
    resultDiv.appendChild(container)

    container.addEventListener('click', (e) => {
        console.log('clicked')
        document.getElementById('modal-image').src = car.img
        document.getElementById('model').innerText = car.model
        document.getElementById('year').innerText = car.year
        document.getElementById('price').innerText = car.price
        const backdrop = document.querySelector(".backdrop");
        const modal = document.querySelector(".modal");
        modal.classList.add("open");
        backdrop.classList.add("open");
    })

})
const closeModal = () => {
    document.querySelector(".backdrop").classList.remove('open')
    document.querySelector(".modal").classList.remove('open')
}

document.querySelector(".backdrop").addEventListener('click', () => {
    closeModal()
})

document.querySelector(".modal").addEventListener('click', () => {
    closeModal()
})
