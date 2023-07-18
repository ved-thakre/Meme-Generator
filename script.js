const generateButton = document.getElementsByClassName("meme_button")[0];
const titleName = document.getElementsByClassName("meme_title")[0];
const Memeimage = document.getElementsByClassName("meme_image")[0];
const authorName = document.getElementsByClassName("meme_author")[0];

// Adding an even listner to button

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) =>{
        return response.json();
    }).then((data) => {
        Memeimage.setAttribute("src", data.url);
        titleName.innerHTML = data.title;
        authorName.innerHTML = "Author : " +  data.author;
    })
}

generateButton.addEventListener("click", generateMeme);

generateMeme();
