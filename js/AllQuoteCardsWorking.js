import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const getDataButton = document.getElementById('searchbyAllQuotes')

//----------
// const app = document.getElementById('root')
// const container = document.createElement('div')
// container.setAttribute('class', 'container')
// app.appendChild(container)
//----------

getDataButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let url = `https://quote-garden.herokuapp.com/api/v3/quotes?page=1&limit=100`
    //`https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=21`
    let div = document.querySelector('.container');
    div.innerHTML ="";


    axios.get(url)
        .then( (response) =>{
            console.log(response);
       
            // // // Variable for Quote Data
            // let allQuote = response.data.quotes
                
            let allQuote = response.data.data
            //Create For loop to create multiple cards
             for (let i = 0; i < allQuote.length; i++){
                // let tem = document.querySelector('.tem');
                // tem.innerHTML= `${response.data.quotes[i].quoteText} \n ${response.data.quotes[i].quoteAuthor}`
                   
                    //Below variables will hold the data each time the loop will run
                    let allQuoteText = allQuote[i].quoteText;
                    let allQuoteAuthor = allQuote[i].quoteAuthor;
                    //defining a variable that will contain all the new divs i.e cards

                
                    
                    //create new divs
                    const card = document.createElement('div')
                    card.setAttribute('class', 'card')
                    

                    //Create Author Name
                    let AuthorName = document.createElement('h4');
                    //Create Class for this element with AuthName
                    AuthorName.setAttribute('class', 'AuthName');
                    //Put the innerhtml as the data pulled from the api
                    AuthorName.innerHTML = `#${allQuoteAuthor} <br><br>`;


                    //Create Quote Para
                    let QuotePara = document.createElement('p');
                    //Create Class for this element with name QuoteParagraph
                    QuotePara.setAttribute('class', 'QuoteParagraph');
                    //Put the innerhtml as the data pulled from the api
                    QuotePara.innerHTML = `${allQuoteText} `;
                    


                    

                    div.appendChild(card);
                    card.appendChild(AuthorName);
                    card.appendChild(QuotePara);
                    
                    
          
                    
            // //     let giphyObj = gif[i].images.fixed_height_small.url;
            // //     let newImg = document.createElement('img');
            // //     newImg.setAttribute("src", giphyObj); ??
            // //     document.querySelector('div').appendChild(newImg);

             }    

        })
        .catch( (error)=> {
            // handle error
            let tem = document.querySelector('.tem');
            tem.innerHTML= `Please enter the keyword again`
            console.log(error);
        })


        })



        
