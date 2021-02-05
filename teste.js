function password(){

    caract1 = (min, max) => {
        let n1 = Math.floor(Math.random() * (max - min) + min)
        let n2 = String.fromCharCode(n1)
        return n2
    }

    let pass =`${caract1(48,57)}${caract1(64,90)}${caract1(97,122)}${caract1(35,38)}${caract1(48,57)}${caract1(64,90)}${caract1(97,122)}${caract1(35,38)}`
    return pass    
}

let i = 1
let arry = []
do{
    arry.push(password())
    i++    
}while(i <= 10)
console.log(arry)