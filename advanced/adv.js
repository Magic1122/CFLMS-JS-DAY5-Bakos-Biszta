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
    /* Saving the reference of our result div in the var resultDiv */
    const resultDiv = document.getElementById('result')
    /* Creating HTML Element */
    const container = document.createElement('div')
    const picture = document.createElement('img')
    const titleP = document.createElement('p')
    const authorP = document.createElement('p')

    /* Setting the source attribute of the img element */
    picture.setAttribute('src', item.image)

    /* Adding a Class to our container div, regarding the true or false value of our read property */
    const readOrNot = item.read === 'true' ? 'read' : 'not-read'
    container.setAttribute('class', readOrNot)

    /* Setting the value of our paragraphs */
    titleP.innerText = item.title
    authorP.innerText = item.author

    /* Appending the Elements to our Container DIV */
    container.appendChild(titleP)
    container.appendChild(authorP)
    container.appendChild(picture)

    /* Appending our Container DIV to our Results DIV */
    resultDiv.appendChild(container)


})
