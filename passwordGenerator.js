function passwordGenerator(tam = 8){

        if(tam < 8){
            tam = 8
        }

        caract1 = (min = 33, max = 122) => {
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = String.fromCharCode(n1)
        return n2
    }

    let stringpass = ''
    let x = 1
    do{
        stringpass = stringpass + `${caract1()}`
        x++
    }while(x <= tam)
    console.log(stringpass)

}
passwordGenerator(10)


//Teste de caracteres sem usar a tabela ASCII

    caract1 = (min = 0, max = 26) => {
        let numeros = 'abcdefghijklmnopqrstuvwxyz'    
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = numeros.charAt(n1)
        console.log(n2)
    }
    caract2 = (min = 0, max = 26) => {
        let numeros = 'abcdefghijklmnopqrstuvwxyz'
        let numUPP = numeros.toUpperCase()    
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = numUPP.charAt(n1)
        console.log(n2)
    }

    caract1()
    caract2()