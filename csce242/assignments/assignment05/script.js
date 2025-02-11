//Hello Box
const addingHello = () => {
    const output = document.getElementById("add-hello");
    const newP = document.createElement("p");
    const hello = document.createTextNode("Hello");

    newP.appendChild(hello);
    output.appendChild(newP);

    console.log("this is the hello button workings")

}
document.getElementById("column-one").onclick = addingHello;

//Star Color Changer
const colorAssortment = document.getElementById("color-assortment");
const star = document.getElementById("star");

const colorChange = (event) => {
    const selectedColor = event.target.value;
    star.style.color = selectedColor;
}

colorAssortment.addEventListener("input", colorChange);

//Image Change
const changeImage = () => {
    document.getElementById("image-change").src = "images/black200x200.png";
}

document.getElementById("image-change").onclick = changeImage;