import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

//const BASE_URL = process.env.BASE_URL;
const SearchbyKeyword = document.getElementById('SearchbyKeyd')
const getDataButton = document.getElementById('getData')




getDataButton.addEventListener("click",(e)=>{
    // reload();
    e.preventDefault();
    let div = document.querySelector('.container');
    div.innerHTML = "";
    
    let SearchbyKeywordS =SearchbyKeyword.value.toLowerCase()
    let url = `https://quote-garden.herokuapp.com/api/v2/quotes/${SearchbyKeywordS}?page=1&limit=10`
    //https://quote-garden.herokuapp.com/api/v2/quotes/random



    axios.get(url)
        .then( (response) =>{
            console.log(response);

            // // // Variable for Quote Data
            let allQuote = response.data.quotes

            //Create For loop to create multiple cards
             for (let i = 0; i < allQuote.length; i++){
                // let tem = document.querySelector('.tem');
                // tem.innerHTML= `${response.data.quotes[i].quoteText} \n ${response.data.quotes[i].quoteAuthor}`
                   
                    let allQuoteText = allQuote[i].quoteText;
                    let allQuoteAuthor = allQuote[i].quoteAuthor;

                    
                
                    
                    //create new divs
                    const card = document.createElement('div')
                    card.setAttribute('class', 'card')
                    

                    //Create Author Name
                    let AuthorName = document.createElement('h4');
                    AuthorName.setAttribute('class', 'AuthName');
                    AuthorName.innerHTML = `#${allQuoteAuthor} <br><br>`;


                    //Create Quote Para
                    let QuotePara = document.createElement('p');
                    QuotePara.setAttribute('class', 'Para');
                    QuotePara.innerHTML = `${allQuoteText} `;

                    div.appendChild(card);
                    card.appendChild(AuthorName);
                    card.appendChild(QuotePara);

             }    

        })

        .catch( (error)=> {
            // handle error
            let tem = document.querySelector('.container');
            tem.innerHTML= `Please enter the keyword again`
            console.log(error);
        })


        })



        
