import axios from 'axios';
import dotenv from 'dotenv';
import {
    async
} from 'q';
dotenv.config();

const getDataButton = document.getElementById('searchbyAuthBtn')
getDataButton.addEventListener("click", (e) => {
    e.preventDefault();
    let url = `https://quote-garden.herokuapp.com/api/v3/authors`
    let div = document.querySelector('.container-card-holder');
    div.innerHTML = "";


    axios.get(url)
        .then((response) => {
            console.log(response);

            // // // Variable for Quote Data
            let allQuote = response.data.data[0]

            //Create For loop to create multiple cards
            for (let i = 0; i < allQuote.length; i++) {

                let allQuoteAuthor = allQuote[0][i];

                let div = document.querySelector('.container-card-holder');


                //create new divs
                const card = document.createElement('div')
                card.setAttribute('class', 'card')


                //Create Author Name
                let AuthorName = document.createElement('h4');
                AuthorName.setAttribute('class', 'AuthName');
                AuthorName.innerHTML = `~${allQuoteAuthor} <br><br>`;


                //Create Quote Para
                // let QuotePara = document.createElement('p');
                // QuotePara.setAttribute('class', 'AuthName');
                // QuotePara.innerHTML = `${allQuoteText} `;

                div.appendChild(card);
                card.appendChild(AuthorName);
                // card.appendChild(QuotePara);

            }

        })

        .catch((error) => {
            // handle error
            let tem = document.querySelector('.container-card-holder');
            tem.innerHTML = `Please enter the keyword again`
            console.log(error);
        })


})






// axios.get(url)
//     .then( (response) =>{
//         console.log(response);

//         // // // Variable for Quote Data
//         let allQuote = response.data.quotes

//         //Create For loop to create multiple cards
//          for (let i = 0; i < allQuote.length; i++){

//                 let allQuoteText = allQuote[i].quoteText;
//                 let allQuoteAuthor = allQuote[i].quoteAuthor;

//                 let div = document.querySelector('.container');


//                 //create new divs
//                 const card = document.createElement('div')
//                 card.setAttribute('class', 'card')


//                 //Create Author Name
//                 let AuthorName = document.createElement('h4');
//                 AuthorName.setAttribute('class', 'AuthName');
//                 AuthorName.innerHTML = `#${allQuoteAuthor} <br><br>`;


//                 //Create Quote Para
//                 let QuotePara = document.createElement('p');
//                 QuotePara.setAttribute('class', 'AuthName');
//                 QuotePara.innerHTML = `${allQuoteText} `;

//                 div.appendChild(card);
//                 card.appendChild(AuthorName);
//                 card.appendChild(QuotePara);

//          }    

//     })

//     .catch( (error)=> {
//         // handle error
//         let tem = document.querySelector('.container');
//         tem.innerHTML= `Please enter the keyword again`
//         console.log(error);
//     })


//     })
