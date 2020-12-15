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
    let url = `https://quote-garden.herokuapp.com/api/v3/genres`
    //`https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=21`
    //   div.innerHTML ="";
    

    axios.get(url)
        .then( (response) =>{
            console.log(response);
       
            // // // Variable for Quote Data
            // let allQuote = response.data.quotes    
            let allQuote = response.data.data
            //Defining a variable that will contain all the new divs i.e cards
            let div = document.querySelector('.container');

            var colors = ['#264653', '#2a9d8f', '#e9c46a','#f4a261', '#e76f51', '#252d41', '#0f182e', '#262322', '#002A32', '#791E94', '#171123'];
          

            //Create For loop to create multiple cards
             for (let i = 0; i < allQuote.length; i++){
                    
                    //Below variables will hold the data each time the loop will run
                    //let allQuoteText = allQuote[i].quoteText;
                    let Topics = allQuote[i];

                    //create new divs
                    const card = document.createElement('div');
                    card.setAttribute('class', 'card');

                    //Create Author Name
                    let AuthorName = document.createElement('h2');
                    //Create Class for this element with name = AuthName
                    AuthorName.setAttribute('class', 'TopicCardText');
                    //Put the innerhtml as the data pulled from the api
                    AuthorName.innerHTML = `<a>${Topics}</a>`;

                    //variable for random colors
                    var random_color = colors[Math.floor(Math.random() * colors.length)];
                    AuthorName.style.backgroundColor = random_color;
                

                    div.appendChild(card);
                    card.appendChild(AuthorName);
                    //card.appendChild(QuotePara);
                    // document.getElementsByClassName('TopicCardText').

             }

                            //------function to access the value for clicked item on the page--------------
                            let allTheCards = document.querySelectorAll('.card');
                                                
                            allTheCards.forEach(function(el) {
                            el.addEventListener('click', onClick, false);
                            })
                            
                            function onClick(e) {
                            let selectedCard = e.currentTarget;
                            let selectedTopic = selectedCard.querySelector('.TopicCardText');
                            let extractedValue = selectedTopic.innerText;
                            //console the extracted value
                            console.log(extractedValue) 
                            //transfering the value to global function to be able to access this value    
                            clickedVal(extractedValue)    
                            }                
                                         


        })
        .catch( (error)=> {
            // handle error
            let tem = document.querySelector('.container');
            tem.innerHTML= `Please enter the keyword again`
            console.log(error);
        })
    })



//When the card will be click from the first function then this function will be used to get data from the new url using the clicked value
let clickedVal = function (r){
    let valueoffunction1 = r
    let secondurl = `https://quote-garden.herokuapp.com/api/v3/quotes?genre=${valueoffunction1}&limit=51`;
    //console logging the url after importing the extracted value from function 1
    console.log(secondurl);

    //calling the second url data
    axios.get(secondurl)
        .then( (response) =>{
            console.log(response);
            //Clear the div results from previous function
            let div = document.querySelector('.container');
            div.innerHTML = "";
            let newDatafromSecondUrl = response.data.data

            //Below is where we will input all the data for the new requests copy the code from search by keyword here and modify it according to the results

              //Create For loop to create multiple cards
              for (let i = 0; i < newDatafromSecondUrl.length; i++){
                    
                //Below variables will hold the data each time the loop will run
                let allQuoteText = newDatafromSecondUrl[i].quoteText;
                let allQuoteAuthor = newDatafromSecondUrl[i].quoteAuthor;

                //create new divs
                const card = document.createElement('div');
                card.setAttribute('class', 'card');


                //Create Quote Para
                let QuotePara = document.createElement('p');
                QuotePara.setAttribute('class', 'Para');
                QuotePara.innerHTML = `${allQuoteText} `;
                

                //Create Author Name
                let AuthorName = document.createElement('h4');
                //Create Class for this element with name = AuthName
                AuthorName.setAttribute('class', 'AuthName');
                //Put the innerhtml as the data pulled from the api
                AuthorName.innerHTML = `~${allQuoteAuthor}`;

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


    }
