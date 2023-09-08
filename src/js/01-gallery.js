import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListRef = document.querySelector(".gallery");

galleryListRef.insertAdjacentHTML(
  "beforeend",
  createGalleryMarkup(galleryItems)
);

galleryListRef.addEventListener("click", handleGalleryImageClick);

function createImageMarkup({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
}

function createGalleryMarkup(galleryArr) {
  return galleryArr.map((item) => createImageMarkup(item)).join("");
}

function handleGalleryImageClick(event) {
  event.preventDefault();

  const image = event.target;

  if (!image.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
      <img src="${image.dataset.source}">
  `,
    {
      onShow() {
        document.addEventListener("keydown", handleEscKeyDown);
      },
      onClose() {
        document.removeEventListener("keydown", handleEscKeyDown);
      },
    }
  );

  instance.show();

  function handleEscKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
      // console.log("work keydown");
    }
  }
}
