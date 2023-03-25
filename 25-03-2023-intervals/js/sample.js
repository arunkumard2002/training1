/**
 * we have discussed on for-of, for-in, forEach, each
 * today we are going to discuss on regex(Regular Expressions), Intervals, Sessions.
 */
// let timer = setInterval(myTimer, 1000);
let timer = setTimeout(myTimer, 2000);

function myTimer() {
    const date = new Date();
    document.getElementById("timer").innerHTML = date.toLocaleTimeString();
    // fetch('https://dummyjson.com/products/1').then((response)=>{
    //     response = {
    //         count: 100,
    //         isCompleted: false
    //     }
    //     alert('Current count is'+response.count);
    //     if(response.isCompleted){
    //         clearInterval(timer);
    //     }
    // }, (error) => {
    //     console.log(error);
    // })
    fetch('https://dummyjson.com/products/1').then(res => res.json())
    .then(json => console.log(json))
}

//www.google.com/allusers
