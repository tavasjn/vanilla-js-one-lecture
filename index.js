let count = 0;

const counter = document.getElementById('counter');
counter.innerText = count;


function colorChecker(){
    if(count < 0){
        counter.style = 'color: #FF3333'
    } else if(count > 0){
        counter.style = 'color: #46FF33'
    } else {
        counter.style = 'color: white;'
    }
}


function decrementCount(){
    count--;
    counter.innerText = count;
    colorChecker()
};

function incrementCount(){
    count++;
    counter.innerText = count;
    colorChecker()
};

function clearCount(){
    count = 0;
    counter.innerText = count;
    colorChecker()
};


let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function(){
    console.log('Count Cleared!')
});


const userName = document.getElementById('username');

const nameInput = document.getElementById('nameInput');


function changeUsername(){
    if(nameInput.value){
        userName.innerText = `${nameInput.value}'s Counter`;
        nameInput.value = '';
    } else {
        alert('Please Enter Your Name')
    }
}



const background = document.querySelector('body');

const sectionText = document.getElementById('input-container');

const themeButton = document.getElementById('theme-button');

function themeChange(){
    background.classList.toggle('dark-theme-body');
    userName.classList.toggle('dark-theme-username');
    nameInput.classList.toggle('dark-theme-input');
    sectionText.classList.toggle('dark-theme-input-container');
    if(themeButton.innerText === 'Dark Mode'){
        themeButton.innerText = 'Light Mode'
    } else {
        themeButton.innerText = 'Dark Mode'
    }
}