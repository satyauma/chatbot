//Creating Express Server

const express = require('express')
const app=express()

app.use(express.static('public'))
app.listen(5000,()=>{
    console.log("server is active")
})


async function getResponse(){
    var input = document.getElementById("input").ariaValueMax;
    var parent = document.getElementById("chat")
}

const button = document.getElementById("button");
button.addEventListener('click',getResponse)

if(input===''){return}
else{
    const ques = document.createElement('div')
    ques.innerHTML=input
    ques.classList.add("box")
    parent.appendChiled(ques)

}

document.getElementById("input").value = ''

//sent the question to our server so that the server can send it to openAI API and send us back
let res = await fetch()