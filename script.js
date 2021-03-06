const quoteContainer=document.getElementById("quote-container");
const quoteText=document.getElementById("quote");
const authorText=document.getElementById("author");
const twitterBtn=document.getElementById("twitter");
const newQuoteBtn=document.getElementById("new-quote");
const loader=document.getElementById("loader");





let apiquotes=[];

function loading(){
    loader.hidden =false;
    quoteContainer.hidden=true
}

function complete(){
    quoteContainer.hidden=false;
    loader.hidden=true
}



function newquote(){
    loading();
    const quote=apiquotes[Math.floor(Math.random()*apiquotes.length)];
    // authorText.textContent =quote.author; //textContent is a keyword
   if(!quote.author){
    author.Text.textcontent ='Unknown';
   }else{
    authorText.textContent =quote.author;

   }
   if(quote.text.length>120){
   quoteText.classList.add('long-quote');
   }else{
    quoteText.classList.remove('long-quote');

   }
   
   
   
    quoteText.textContent=quote.text;
    complete();
}


async function getquotes(){
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response= await fetch(apiUrl);
        apiquotes=await response.json();
        // console.log(apiquotes[12]);
        newquote();
    }catch(error){


    }

}


function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent}  - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


newQuoteBtn.addEventListener('click',newquote);
twitterBtn.addEventListener('click',tweetQuote);

getquotes();