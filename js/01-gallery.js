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

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const targetImg = e.target.nodeName;
  if (targetImg !== "IMG") {
    return;
  }
  const photoHD = e.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${photoHD}" width="800" height="600">
  `);

  instance.show();
  //   console.log(targetImg);
  gallery.addEventListener("keydown", (key) => {
    if (key.code !== "Escape") {
      return;
    }
    instance.close();
  });
});

// function fullImg(e) {
//   e.preventDefault();
//   const targetImg = e.target.nodeName;
//   if (targetImg !== "IMG") {
//     return;
//   }
//   const photoHD = e.target.dataset.source;
//   const instance = basicLightbox.create(`
//     <img src="${photoHD}" width="800" height="600">
// `);

//   instance.show();
//   //   console.log(targetImg);
// }
