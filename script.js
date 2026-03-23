 /*logica*/
   async function clicounobotao(){
        alert("ola")
const cidade = document.querySelector(".input-cidade").value
console.log(cidade)
let caixa = document.querySelector(".caixa-media")
const chave = "3b4b1ce7882ffb953d451a4ad99dd527"

let lugar  = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`

let respostaServidor = await fetch(lugar)
let dadosJson = await respostaServidor.json()
console.log(dadosJson)
caixa.innerHTML = `
<h2 class = "cidade">${dadosJson.name}</h2>
<p class = "temp">${dadosJson.main.temp}°C</p>
<img src="https://openweathermap.org/img/wn/${dadosJson.weather[0].icon}.png">
<p class = "umidade">Umidade : ${dadosJson.main.humidity}</p>
<button class = "botaoia">sugestao</button>
<p class = "ria">Resposta da IA</p>


`


    } 


    function detectarVoz(){

        alert("adadadadadadadad")
        let reconhecimento = new webkitSpeechRecognition();
        reconhecimento.lang = "pt-BR"
        reconhecimento.start()
        reconhecimento.onresult = function(evento){
            console.log(evento)
            let textotrancrito = evento.results[0][0].transcript
        }
    }





/*
    https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}
http://api.openweathermap.org/geo/1.0/direct?q=${cidade},{state code},{country code}&limit={limit}&appid=${chave}*/