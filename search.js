const accessKey = "02o0_ny2O_k2g5WxCC09CS16sVLG6EGYQfA5YBkJ4-g";
const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const showMoreBtn = document.getElementById("show-more-button");
const searchButton = document.getElementById("search-button");
const imagesSection = document.getElementById("images-section");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    if (page === 1) {
        searchResults.innerHTML = "";
        imagesSection.innerHTML = ""; // Clear static images
    }

    results.forEach((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("result-item");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description || "View Image";

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);

        searchResults.appendChild(imageWrapper);
    });

    if (results.length > 0) {
        showMoreBtn.style.display = "block";
    } else {
        showMoreBtn.style.display = "none";
    }

    page++;
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

searchButton.addEventListener("click", () => {
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    searchImages();
});
