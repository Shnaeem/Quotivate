import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const getDataButton = document.getElementById('getTemp')

getDataButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let url = `https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=20`
    //https://quote-garden.herokuapp.com/api/v2/quotes/random



    axios.get(url)
        .then( (response) =>{
            console.log(response);
            // let tem = document.querySelector('.tem');
            // tem.innerHTML= `${response.data.quotes[0].quoteText} \n ${response.data.quotes[1].quoteAuthor}`
            
            
            // // // Try below
            let allQuote = response.data.quotes

             for (let i = 0; i < allQuote.length; i++){
                // let tem = document.querySelector('.tem');
                // tem.innerHTML= `${response.data.quotes[i].quoteText} \n ${response.data.quotes[i].quoteAuthor}`
                  
                    let allQuoteText = allQuote[i].quoteText;
                    let allQuoteAuthor = allQuote[i].quoteAuthor;

                    //Create Multiple Quote
                    let newH3 = document.createElement('h3');
                    newH3.innerHTML = `${allQuoteText} <br> `;

                    //Create Author Name
                    let newH4 = document.createElement('h4');
                    newH4.innerHTML = `${allQuoteAuthor} <br> <br> <br>`;

                    document.querySelector('div').appendChild(newH3);
                    document.querySelector('div').appendChild(newH4);
                    //console.log(newH3)
          
                    
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



        