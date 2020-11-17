let dodger = document.getElementById("dodger");

// function moveDodgerLeft() {
//     let newPosition = dodger.style.left.replace("px", "");
//     console.log(`newPosition = ${newPosition}`)
//     let position = parseInt(newPosition, 10);
  
//     if (position > 0) {
//       dodger.style.left = `${position - 10}px`;
//     }
//   }

function moveDodger(dir) {
    let newPosition = dodger.style.left.replace("px", "");
    console.log(`newPosition = ${newPosition}`)
    let position = parseInt(newPosition, 10);
  
    if (position > 0) {
        if (dir == "left") {
      dodger.style.left = `${position - 10}px`;
        } 
    }
    if (position < (355)) {
        if (dir == "right") {
      dodger.style.left = `${position + 10}px`;
        } 
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodger("left");
    }else if (e.key === "ArrowRight") {
        moveDodger("right");
      }
  });