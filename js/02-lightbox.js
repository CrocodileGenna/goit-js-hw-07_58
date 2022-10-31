import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function renderGalery(el) {
  return el
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", renderGalery(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionsData: "alt",
});
