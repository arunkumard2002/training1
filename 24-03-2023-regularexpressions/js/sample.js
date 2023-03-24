/**
 * we have discussed on for-of, for-in, forEach, each
 * today we are going to discuss on regex(Regular Expressions, Intervals, Sessions)
 */


//let str = "arunkumar is teaching regex classnow where arunkumar teaches intervals";
// let str = "arun arun arunkumar is teaching regex classnow where arunkumar teaches intervals";
// /^?[arun]{2}$/
// /[\w\d]/ig/
// /[\w]+/; 'arunkumaristeaching';

// /[\d\s]{0,2}+/ //"97"

// let text = "Visit W3School";
// let pattern = /w3schools/i;
// let result = text.match(pattern);
// debugger;

// https://regexper.com/

// https://regex101.com/
function validateEmail(event) {
    console.log(event);
    if(!event.validity.valid){
        event.style.borderColor = 'red';
        event.style.borderWidth = '1px';
        document.getElementById('emailError').style.display = 'block';
        if(event.value === ''){
            document.getElementById('emailError').innerText = 'Empty Numbers cannot be accepted';
        } else {
            document.getElementById('emailError').innerText = 'Please enter 10 digit number';
        }
    } else {
        event.style.borderColor = '';
        event.style.borderWidth = '';
        document.getElementById('emailError').innerText = '';
        document.getElementById('emailError').style.display = 'none';
    }
}