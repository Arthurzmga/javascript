function Contar() {
    var inicio = document.querySelector('#txtn').value;
    var fim = document.querySelector('#txtf').value;
    var passo = document.querySelector('#txtp').value;
    var res = document.querySelector('#res');
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossível contar! Por favor, preencha todos os campos.';
    } else {
        inicio = Number(inicio);
        fim = Number(fim);
        passo = Number(passo);
        res.innerHTML = 'Contando: <br>';
        if(passo <= 0){
            alert('Passo inválido! Considerando PASSO 1');
            passo = 1;
        } else if(inicio < fim){
            for(var i = inicio; i<= fim; i += passo) {
                res.innerHTML += ` ${i} \u{1F449}`;
            }
        } else {
            for(var i = inicio; i >= fim; i -= passo) {
                res.innerHTML += ` ${i} \u{1F449}`;
            }
        }
        res.innerHTML += ` \u{1F3F4}`;
    }
}