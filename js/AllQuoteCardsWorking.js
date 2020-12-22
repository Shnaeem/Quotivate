import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

//const getDataButton = document.getElementById('searchbyAllQuotes')
//const getDataButton = document.querySelector('.container')
// getDataButton.addEventListener("click",(e)=>{

//Event will start as soon as the page is loaded
window.addEventListener('load',(e)=>{
    e.preventDefault();
    let url = `https://quote-garden.herokuapp.com/api/v3/quotes?page=1&limit=400`
    //`https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=21`
    let div = document.querySelector('.container-card-holder');
    // div.innerHTML ="";


    axios.get(url)
        .then( (response) =>{
            console.log(response);
       
            // // // Variable for Quote Data
            // let allQuote = response.data.quotes    
            let allQuote = response.data.data
            
            //Create For loop to create multiple cards
             for (let i = 0; i < allQuote.length; i++){
                    
                    //Below variables will hold the data each time the loop will run
                    let allQuoteText = allQuote[i].quoteText;
                    let allQuoteAuthor = allQuote[i].quoteAuthor;
                    //defining a variable that will contain all the new divs i.e cards
                    
                    //create new divs
                    const card = document.createElement('div')
                    card.setAttribute('class', 'card')   


                    //Create Quote Para
                    let QuotePara = document.createElement('p');
                    //Create Class for this element with name QuoteParagraph
                    QuotePara.setAttribute('class', 'Para');
                    //Put the innerhtml as the data pulled from the api
                    QuotePara.innerHTML = `${allQuoteText} `;


                    //Create Author Name
                    let AuthorName = document.createElement('h4');
                    //Create Class for this element with AuthName
                    AuthorName.setAttribute('class', 'AuthName');
                    //Put the innerhtml as the data pulled from the api
                    AuthorName.innerHTML = `~${allQuoteAuthor} <br><br>`;

                    div.appendChild(card);
                    card.appendChild(QuotePara);
                    card.appendChild(AuthorName);      
             }    

        })
        .catch( (error)=> {
            // handle error
            let tem = document.querySelector('.container-card-holder');
            tem.innerHTML= `Please enter the keyword again`
            console.log(error);
        })


        })



        
