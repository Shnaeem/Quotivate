import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const getDataButton = document.getElementById('getTemp')

//----------
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)
//----------

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
                    let div = document.querySelector('div');
                    
                    
                    //create new divs
                    const card = document.createElement('div')
                    card.setAttribute('class', 'card')
                    

                    //Create Author Name
                    let AuthorName = document.createElement('h4');
                    AuthorName.setAttribute('class', 'AuthName');
                    AuthorName.innerHTML = `${allQuoteAuthor} <br>`;
                    

                    //Create Multiple Quote
                    let QuotePara = document.createElement('p');
                    QuotePara.setAttribute('class', 'AuthName');
                    QuotePara.innerHTML = `${allQuoteText} <br> `;
                    


                    

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



        
