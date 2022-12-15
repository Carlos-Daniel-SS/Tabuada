
function gerartabuada() {
    var numero = Number(document.querySelector('#numero').value);
    var res = document.querySelector('#res'); 
    //res.innerHTML = `Está funcionando ${numero.length}`
    resultado = []
    for (let i=0; i <=10; i++){
        resultado.push(`${numero}x${i} = ${numero*i}`)
    }
    res.innerHTML = `${resultado.join('</br>')}`
}