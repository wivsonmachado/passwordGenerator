function passwordGenerator(size = 8, charchoice = 1){

    if(size < 8){
        size = 8
    }
        let mixletters = ''
        let letters = 'abcdefghijklmnopqrstuvwxyz'
        let numbers = '0123456789'
        let simbols = '!@#$%&*()-_:;,.?[{}]^~+'
        let uppletters = letters.toUpperCase()

        switch(charchoice){
            case 1:
                mixletters = letters + uppletters
                break
            case 2:
                mixletters = letters + uppletters + numbers
                break
            case 3:
                mixletters = letters + uppletters + numbers + simbols
        }

        caract1 = (min = 0, max = mixletters.length) => {
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = mixletters.charAt(n1)
        return n2
    }

    let stringpass = ''
    let x = 1
    do{
        stringpass = stringpass + `${caract1()}`
        x++
    }while(x <= size)
    console.log(stringpass)

}
passwordGenerator(10, 1)
passwordGenerator(15, 2)
passwordGenerator(20, 3)