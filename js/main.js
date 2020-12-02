import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const getDataButton = document.getElementById('getTemp')

getDataButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let url = `${BASE_URL}quotes/random`
    //https://quote-garden.herokuapp.com/api/v2/quotes/random



    axios.get(url)
        .then( (response) =>{
       //console.log(response);
            let tem = document.querySelector('.tem');
            tem.innerHTML= `${response.data.quote.quoteText} \n
            ${response.data.quote.quoteAuthor}
            ${response.data.quote.quoteGenre}`
        })
        .catch( (error)=> {
            // handle error
            let tem = document.querySelector('.tem');
            tem.innerHTML= `Please enter the keyword again`
            console.log(error);
        })


        })

        //Adding some comments here to update my repo
        //Adding comment for branch update
