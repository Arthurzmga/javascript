function Tabuada() {
    var t = document.querySelector("#txtn")
    var res = document.querySelector("#res")
    if(t.length == 0){
        window.alert('Ops algo deu errado! Insira algum valor')
    }else{
        t = Number(t.value)
        var i = 1
        res.innerHTML = ''
        while(i <= 10){
            let item = document.createElement('option')
            item.value = `res${i}`
            item.text = `${t} X ${i} = ${t*i}`
            res.appendChild(item)
            i++
        }
    }
}