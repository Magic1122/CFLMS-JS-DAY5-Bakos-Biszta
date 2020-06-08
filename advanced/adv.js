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
for (i = 0, i < object1.length, i++) {
    document.getElementById('result').innerHTML += "<div>Title"
}