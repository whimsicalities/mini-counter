countUp(0);

function countUp(value: number){
    console.log(value++);
    setTimeout(() => countUp(value), 1000)
}