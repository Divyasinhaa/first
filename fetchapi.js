const URL="https://cat-fact.herokuapp.com/facts"
const factpara=document.querySelector("#facts");

const gettexttospeech=async()=>{
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    factpara.innerHTML=data[4].text;

};

