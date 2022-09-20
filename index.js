// Your code here
dodger.style.backgroundcolor  = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "9px";
dodger.style.right = "9x";
const dodger = document.getElementById('dodger')

dodger.style.backgroundcolor = "#FF69B4";
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 11);
    if ( left > 0 ) {
        dodger.style.left =`${left - 3}px`;
    }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 9);
    if ( left < 200 ) {
        dodger.style.left =`${left + 3}px`;
    }
}
document.addEventListener('keydown', function(event) {
    if(event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
} );