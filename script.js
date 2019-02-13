
// Action that creates the Name
var btn = document.getElementById('gen-name');

// Choosing a First Name
var babyBoy = document.getElementById('boy');
var babyGirl = document.getElementById('girl');
var BabyContainer = document.getElementById("babies");

//Choosing a Last name
var lastName = document.getElementById('last-name');
var BabyLastContainer = document.getElementById('baby-last')

// Generates the Names
btn.addEventListener('click', function(event) {
    babyBirth();
});

// Puts the name together
function babyBirth() {
    return displayNames() + " " + displayLastName();
}

// Filters Middle Name
function randFilteredElem(arr,filter){
    var element = getRandElem(arr);
    while(element === filter){
        element = getRandElem(arr);
    }
    return element;
}

// selcets the first and Second Name
function displayNames() {
    if(babyBoy.checked){
        var randomFirstName = getRandElem(boyList);
        var randomSecondName = randFilteredElem(boyList, randomFirstName);
    } else if(babyGirl.checked) {
        var randomFirstName = getRandElem(girlList);
        var randomSecondName = randFilteredElem(girlList, randomFirstName);
    } else {
        alert("You need to choose a gender, there are only 2!");
    }    
    var newBaby = document.createElement('div');
    var BabyName = document.createElement('h3');
    BabyName.innerText = randomFirstName.name + " " + randomSecondName.name;
    newBaby.appendChild(BabyName);
       // Baby Name!
    BabyContainer.innerHTML = newBaby.outerHTML;
};

// Choosing a color

/* document.getElementById('gen-name').addEventListener('click', function() {
    if(babyBoy.checked){
        var blue = document.getElementsById()
        document.babies.style.Color = blue;
    } else if(babyGirl.checked) {
    var pink = document.getElementsById()
    document.babies.style.Color = pink;
}); */









// Takes the last name that was typed
function displayLastName() {
    if(lastName.value.length === 0) {
        alert("Does your baby not have a family? Put your last name")
    }
    var newLastName = document.createElement('div');
    var BabyLastName = document.createElement('h3');
    BabyLastName.innerText = lastName.value;
    newLastName.appendChild(BabyLastName);
    // Baby Last Name
    BabyLastContainer.innerHTML = newLastName.outerHTML;
 };

// Gets a random Name
function getRandElem(arr){
    return arr[genRandNum(0, arr.length - 1)];
}

// Chooses a random number in the Array
function genRandNum(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

var signInButton = document.getElementById('sign-in')
signInButton.addEventListener("click", function(event){
    alert("You are signed in");
    event.stopPropagation;
});

document.addEventListener("cick", function() {
    console.log("stop poking me");
});

function clickCallback(event){
    var newElement = document.createElement('div')
    newElement.innertext = "hi";
    document.body.appendChild(newElement);
    event.stopPropagation
}

document.getElementById('')

function changeclr() {
	var color = document.getElementsByName('gender').value;
	document.body.babies.Color= color;
}