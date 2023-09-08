import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListRef = document.querySelector(".gallery");

galleryListRef.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

function createImageMarkup({ preview, original, description }) {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`;
}

function createGalleryMarkup(galleryArr) {
  return galleryArr.map((image) => createImageMarkup(image)).join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  className: "sl-modificate",
  download: "download image",
});
