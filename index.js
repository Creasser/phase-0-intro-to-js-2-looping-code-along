// Code your solutions in this file

function writeCards(arr, event){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        let card = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
        newArr.push(card)
        debugger;
    }
    return newArr
}


function countDown(num){
    let i = 0
    while (i <= num){
        console.log(num--);
    }
}

