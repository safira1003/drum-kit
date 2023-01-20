var numberOfButton = document.querySelectorAll(".drum").length;

// detecting button press
for (var i=0; i<numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var currentKey = this.innerHTML;
        addSounds(currentKey);
        addButtonAnimation(currentKey);
    });
}

// detecting keyboard press
document.addEventListener("keydown", function(event){
    addSounds(event.key);
    addButtonAnimation(event.key);

});

function addButtonAnimation (keyButton) {
    var activeButton = document.querySelector("."+keyButton);
    activeButton.classList.add("pressed");
    
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}

function addSounds (keyButton) {
    switch (keyButton) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            alert("Salah!");
            break;
    }
}