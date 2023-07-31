onmessage = strangeCalculus;


function strangeCalculus(msg){
    let nbr = msg.data
    let res = 0
    for (let i = 0; i <= nbr; i++) {
        if (i % 2 === 0) {
            res += i
        }
        if (i % 3 === 0) {
            res -= i
        }
    }
    postMessage(res)
}