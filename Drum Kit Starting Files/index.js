var numDrump = document.querySelectorAll(".drum").length;
//ตรวจจับผ่านปุ่ม
for(var i =0; i<numDrump; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick(){
        var btnInnerHtml = this.innerHTML;
       makeSound(btnInnerHtml);
       btnAnimation(btnInnerHtml);
    });
}
//ตรวจจับผ่าน keybord
document.addEventListener("keydown" ,function(event){
    makeSound(event.key);/* แป้นใดถูกกด */
    btnAnimation(event.key);
})
 //sound
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
             break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(btnInnerHtml);

    }
}

function btnAnimation(currentKey){
    var activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");/* add style css ที่ต้องการใช้ */

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100)

}
