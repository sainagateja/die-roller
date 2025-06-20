//  die 6 ------ https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.png
// die 4 ------- https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.png
//  die 5  ------  https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.png
// die 2 --------- https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.png
//  die 1 -------- https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.png
//  die 3 ------- https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.png

const images = [
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.png",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.png",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.png",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.png",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.png",
    "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.png"
];
let box = document.querySelector(".blockk");
let btn = document.querySelector(".buttn");
let container = document.querySelector("#die");
let count = 1;
btn.addEventListener('click', () => {

    container.textContent = "";
    let index = Math.floor(Math.random() * images.length);

    const img = document.createElement('img');
    const divBlock = document.createElement('div');
    img.src = images[index];
    img.style.width = "100px";
    img.style.height = "100px";
    // to add animation
    img.classList.add("animate");

    // to remove animation

    img.addEventListener("animationend", () => {
        img.classList.remove("animate");
    });
    container.appendChild(img);

    divBlock.classList.add('rollBack');
    const img1 = document.createElement('img');
    divBlock.textContent = "Roll " + (count) + ":";
    count = count + 1;
    img1.src = images[index];
    img1.style.width = "30px";
    img1.style.height = "30px";
    divBlock.appendChild(img1);
    box.appendChild(divBlock);



});