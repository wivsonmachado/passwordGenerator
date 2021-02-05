function password(tam = 8){

    caract1 = (min = 64, max = 90) => {
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
password()
password(10)
password(15)
password(20)
