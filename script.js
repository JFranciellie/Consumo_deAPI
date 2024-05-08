const cidade = document.getElementById('cidade');
const chave = '777fd6c175f16899b669ab9b22be7638'
const result= document.getElementById("resultado")

console.log(cidade.value)

const obterTemp = () =>{

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade.value}&lang=pt_br&appid=${chave}&units=metric`

  fetch(url)
        .then(resposta =>{
          // console.log(resposta)
          return resposta.json()
        })
          .then(dados =>{
            result.innerHTML= dados.main.temp
          })
          .catch(erro => {
            console.log(erro)
          })
 }