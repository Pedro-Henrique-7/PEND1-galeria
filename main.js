'use strict'

function createImg(url_image) {
    const galery = document.getElementById('galery')
    const img = document.createElement('img')
    img.src = url_image.url
    galery.appendChild(img)
}


function loadImages() {
    const images = [{
            name: 'Fantastic Four',
            url: './img/image1.jpg'
        },

        {
            name: 'Fantastic Four 2',
            url: './img/image2.jpg'
        },


        {
            name: 'Fantastic Four 3',
            url: './img/image3.jpg'
        },


        {
            name: 'Fantastic Four 4',
            url: './img/image4.jpg'
        },


        {
            name: 'Fantastic Four 5',
            url: './img/image5.jpg'
        },


        {
            name: 'Fantastic Four 6',
            url: './img/image6.jpg'
        },


        {
            name: 'Fantastic Four 7',
            url: './img/image7.jpg'
        },


        {
            name: 'Fantastic Four 8',
            url: './img/image8.jpg'
        },


        {
            name: 'Fantastic Four 9',
            url: './img/image9.jpg'
        },


        {
            name: 'Fantastic Four 10',
            url: './img/image10.jpg'
        }
    ]

    images.forEach(createImg)
}
loadImages()