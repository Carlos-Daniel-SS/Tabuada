
function gerartabuada() {
    var numero = document.querySelector('#numero');
    var res = document.querySelector('#res'); 
    //res.innerHTML = `Está funcionando ${numero.length}`
    resultado = []
    if (numero.value.length == 0){
        window.alert('Insira um valor para a tabuada')
    }else {
        num = Number(numero.value);
        for (let i=0; i <=10; i++){
            resultado.push(`${num}x${i} = ${num*i}`)
        }
        res.innerHTML = `${resultado.join('</br>')}`
    }
    
}