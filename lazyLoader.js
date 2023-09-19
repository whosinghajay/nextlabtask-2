const url = "https://api.artic.edu/api/v1/artworks?page=1&limit=100";

function fetchData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const artworks = data.data;
      console.log(artworks);

      artworks.forEach((artwork) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "18rem";

        const img = document.createElement("img");
        img.src = artwork.image_url;
        img.classList.add("card-img-top");
        img.alt = "Artwork";

        const heading5 = document.createElement("h5");
        heading5.classList.add("card-title");
        heading5.textContent = artwork.title;

        const heading3 = document.createElement("h3");
        heading3.classList.add("card-title");
        heading3.textContent = artwork.artist_display;

        const para = document.createElement("p");
        para.classList.add("card-text");
        para.textContent = artwork.credit_line;

        card.appendChild(heading5);
        card.appendChild(heading3);
        card.appendChild(para);

        document.querySelector(".card").appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function isBottomOfPage() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.offsetHeight;

  return scrollTop + windowHeight >= documentHeight;
}

window.addEventListener("scroll", () => {
  if (isBottomOfPage()) {
    fetchData(); 
  }
});

fetchData();
