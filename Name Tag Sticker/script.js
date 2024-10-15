console.log(`hello check`);

let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Rajesh", "Shaurya", "Ajay"];

let colors = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#800000",
    "#8B0000", "#FFA500", "#FFD700", "#6B8E23", "#7CFC00", "#000080", "#8B008B",
    "#FF00FF", "#F4A460", "#FF3855", "#FD3A4A", "#FB4D46", "#FA5B3D", "#FFAA1D",
    "#FFF700", "#299617", "#A7F432", "#224386", "#5DADEC", "#594682", "#9C5186"
];

let sticker = function (name) {
    // Create a fresh copy of the template's content
    let div = document.importNode(template.content, true).querySelector("div");

    // Set the name of the sticker
    let nameOfStick = div.querySelector(".name");
    nameOfStick.innerHTML = name;

    // Randomize background color and rotation
    div.style.background = colors[Math.floor(Math.random() * colors.length)];
    div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

    // Append the newly created sticker to the wrapper
    wrapper.appendChild(div);
};

// Set a timeout to refresh the page after 1 second
setTimeout(refreshPage, 1000);
function refreshPage() {
    location.reload();
}

// Iterate over names and create stickers for each
names.forEach(sticker);
