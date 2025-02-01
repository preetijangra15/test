let message = document.getElementById("message");
let button = document.getElementById("button");


let count = 0;

function changeMessage() {
    console.log(count);
    if(count == 0){
        message.innerText = "Sochle 😶‍🌫️";
        count+=1;

    }else if(count == 1){
        message.innerText = "Pakkaaaaaa?"
        count += 1;
    }else {
        flyAirplane();
    }
}

function flyAirplane() {
    let airplane = document.getElementById('airplane');
    airplane.style.animation = "flyAway 2s forwards";

    // Create heart trail
    let interval = setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        // Random position near airplane
        let x = airplane.getBoundingClientRect().left + Math.random() * 30;
        let y = airplane.getBoundingClientRect().top + Math.random() * 30;
        
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => { heart.remove(); }, 1500);
        
    }, 100); // Creates hearts every 100ms

    // Stop generating hearts after 2s (same as airplane animation)
    downloadPDF();
    setTimeout(() => { clearInterval(interval); }, 2000);


}

function downloadPDF() {
    document.getElementById("downloadLink").click();
}

window.onload = function() {
    let audio = new Audio("../client/audio.mp3"); // Replace with your file path
    audio.loop = true; // Enable looping
    audio.volume = 1.0; // Set volume (1.0 is max)
    
    // Try to play the audio
    let playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        console.log("Autoplay started!");
      }).catch((error) => {
        console.log("Autoplay blocked. Waiting for user interaction...");
        document.body.addEventListener("click", () => {
          audio.play();
        }, { once: true }); // Play on first user click
      });
    }
  };

button.addEventListener('click', changeMessage);