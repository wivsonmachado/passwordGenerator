function passwordGenerator(tam = 8){

    // 1 - only letters
    // 2 - only numbers
    // 3 - numbers, letters and symbols

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
passwordGenerator()
passwordGenerator(10)
passwordGenerator(15)
passwordGenerator(20)
