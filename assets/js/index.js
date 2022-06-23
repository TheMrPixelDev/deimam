const app = document.getElementById("app");

let photoIndex = 0;
const photos = [
    {
        name: "PXL_20220522_004758059.jpg",
        text: "When Sid drinks alcohol"
    },
    {
        name: "PXL_20220602_222951717.jpg",
        text: "Feel to cup power"
    }
]

async function renderNewPhoto() {
    if(photoIndex === photos.length){photoIndex = 0;}
    const photo = photos[photoIndex];
    const container = document.createElement("div")
    container.classList = "container animate__animated animate__tada";
    const img = document.createElement("img");
    const text = document.createElement("p");
    const headline = document.createElement("h1");
    headline.innerText = "What your mam will see..."
    text.innerText = photo.text;
    img.src = "/assets/img/" + photo.name;
    app.innerHTML = "";
    app.appendChild(headline)
    container.appendChild(img);
    container.appendChild(text);
    app.appendChild(container);
    photoIndex++;
}

renderNewPhoto()
setInterval(renderNewPhoto, 5000)
