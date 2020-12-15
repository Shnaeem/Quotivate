import axios from 'axios';
import dotenv from 'dotenv';
import { async } from 'q';
dotenv.config();

// const BASE_URL = process.env.BASE_URL;
const getDataButton = document.getElementById('randomquotebtn')

getDataButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let url = `https://quote-garden.herokuapp.com/api/v3/quotes/random`
    //https://quote-garden.herokuapp.com/api/v2/quotes/random



    axios.get(url)
        .then( (response) =>{
            console.log(response);
            let QuoteTextPara = document.querySelector('.randomcardpara');
            QuoteTextPara.innerHTML= `${response.data.data[0].quoteText}`

            let QuoteTextAuth = document.querySelector('.randomcardauth');
            QuoteTextAuth.innerHTML= `~${response.data.data[0].quoteAuthor}`;
        })
        .catch( (error)=> {
            // handle error
            let tem = document.querySelector('.randomcardpara');
            tem.innerHTML= `Please enter the keyword again`
            console.log(error);
        })


        })
