/*Create an external JSON file that will contain the data( e.g. 
  `{'title': 'Javascript for Dummies',
   'author': 'Dummy Dumb Dumb',
   'read': 'false'
  }`
Iterate through the array of books. For each book, create a <p> element with the book title and author and append it to the page.
Use an unordered list to display the books.
Each book should have an image cover.
Change the style of the book depending on whether you have read it or not.*/

var object1 = [{
        "title": "Javascript for Dummies",
        'author': "Dummy Dumb Dumb",
        'read': 'false',
        'image': 'https://images-na.ssl-images-amazon.com/images/I/51s0U-29SZL._SX322_BO1,204,203,200_.jpg'
    },

    {
        "title": "Javascript for Dummies",
        'author': "Dummy Dumb Dumb",
        'read': 'true',
        'image': 'https://images-na.ssl-images-amazon.com/images/I/51s0U-29SZL._SX322_BO1,204,203,200_.jpg'
    },
    {
        "title": "Javascript for Dummies",
        'author': "Dummy Dumb Dumb",
        'read': 'false',
        'image': 'https://images-na.ssl-images-amazon.com/images/I/51s0U-29SZL._SX322_BO1,204,203,200_.jpg'
    },
    {
        "title": "Javascript for Dummies",
        'author': "Dummy Dumb Dumb",
        'read': 'true',
        'image': 'https://images-na.ssl-images-amazon.com/images/I/51s0U-29SZL._SX322_BO1,204,203,200_.jpg'
    }
]

object1.map((item) => {
    const resultDiv = document.getElementById('result')
    const container = document.createElement('div')
    const picture = document.createElement('img')
    const titleP = document.createElement('p')
    const authorP = document.createElement('p')

    picture.setAttribute('src', item.image)

    const readOrNot = item.read === 'true' ? 'read' : 'not-read'
    container.setAttribute('class', readOrNot)

    titleP.innerText = item.title
    authorP.innerText = item.author

    container.appendChild(titleP)
    container.appendChild(authorP)
    container.appendChild(picture)

    resultDiv.appendChild(container)


})
