function isPalindrome(str){
    /* Seu código aqui */
    const textoLower = str.toLowerCase().replace(/[\W_]/g, '')
    const textoReverso = textoLower.split('').reverse().join('');
    return textoLower === textoReverso;
}

function arrayMaxMin(arr){
    /* Seu código aqui */
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return [min, max]
}
