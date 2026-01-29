var d = []
var txtn
var sel

window.addEventListener('DOMContentLoaded', function(){
    txtn = document.querySelector("#txtn")
    sel = document.querySelector("#dados")
    txtn.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            add()
        }
    })
})

function verificar(n){
    for(var i in d) {
        if(d[i] == n){
            return -1
        } else{
            return 0
        }
    }
}

function add(){
    var n = Number(txtn.value)
    
    if(txtn.value.length == 0){
        alert("O campo está vazio! Preencha com um número")
    } else if(n < 1 || n > 100){
        alert("O número não está entre 1 e 100!")
    } else if(verificar(n) == -1){
        alert("O mesmo número já está na lista!")
    } else{
        document.querySelector("div#res").innerHTML = ""
        d[d.length] = n
        var item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        sel.appendChild(item)
        txtn.value = ""
        txtn.focus()
    }
}

function fim(){
    if(d.length == 0){
        alert("Adicione pelo menos um número antes de finalizar!")
    } else {
        var maior = d[0]
        var menor = d[0]
        var soma = 0
        
        for(var i in d){
            if(d[i] > maior) maior = d[i]
            if(d[i] < menor) menor = d[i]
            soma += d[i]
        }
        
        var media = soma / d.length
            document.querySelector("div#res").innerHTML = `<br><br>Foram adicionados ${d.length} números.<br><br>Maior: ${maior}<br><br>Menor: ${menor}<br><br>Soma: ${soma}<br><br>Média: ${media.toFixed(2)}<br><br>`
    }
}