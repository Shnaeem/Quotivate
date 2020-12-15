import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

//const BASE_URL = process.env.BASE_URL;
const SearchbyKeyword = document.getElementById('SearchbyKw')
const getDataButton = document.getElementById('SearchbyKwBtn')




getDataButton.addEventListener("click",(e)=>{
    // reload();
    e.preventDefault();
    let div = document.querySelector('.container');
    div.innerHTML = "";
    
    let SearchbyKeywordS =SearchbyKeyword.value.toLowerCase()
    //https://quote-garden.herokuapp.com/api/v3/quotes?query=${SearchbyKeywordS}
    let url = `https://quote-garden.herokuapp.com/api/v3/quotes?query=${SearchbyKeywordS}&limit=99`
    //https://quote-garden.herokuapp.com/api/v2/quotes/${SearchbyKeywordS}?page=1



    axios.get(url)
        .then( (response) =>{
            console.log(response);

            // // // Variable for Quote Data
            let allQuote = response.data.data

            //Create For loop to create multiple cards
             for (let i = 0; i < allQuote.length; i++){
                // let tem = document.querySelector('.tem');
                // tem.innerHTML= `${response.data.quotes[i].quoteText} \n ${response.data.quotes[i].quoteAuthor}`
                   
                    let allQuoteText = allQuote[i].quoteText;
                    let allQuoteAuthor = allQuote[i].quoteAuthor;

                    
                
                    
                    //create new divs
                    const card = document.createElement('div')
                    card.setAttribute('class', 'card')

                    //Create Quote Para
                    let QuotePara = document.createElement('p');
                    QuotePara.setAttribute('class', 'Para');
                    QuotePara.innerHTML = `${allQuoteText} `;                    

                    //Create Author Name
                    let AuthorName = document.createElement('h4');
                    AuthorName.setAttribute('class', 'AuthName');
                    AuthorName.innerHTML = `~${allQuoteAuthor} <br><br>`;

                    div.appendChild(card);
                    card.appendChild(QuotePara);
                    card.appendChild(AuthorName);

             }    

        })

        .catch( (error)=> {
            // handle error
            let tem = document.querySelector('.container');
            tem.innerHTML= `Please enter the keyword again`
            console.log(error);
        })


        })



        
