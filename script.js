function isPalindrome(str){
    /* Seu código aqui */
    const textoLower = str.toLowerCase().replace(/[\W_]/g, '')
    const textoReverso = textoLower.split('').reverse().join('');
    return textoLower === textoReverso;
}

function arrayMaxMin(arr){
    /* Seu código aqui */
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}
