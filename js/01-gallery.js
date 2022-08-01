import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const result = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<div class="gallery__item"><a class="gallery__link" href="${original}">
		<img
			class="gallery__image"
			src="${preview}"
			data-source="${original}"
			alt="${description}"/>
	</a></div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", result);

gallery.onclick = function newWindow(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(
    `<img src = ${event.target.dataset.source}>`
  );
  modal.show();
  window.addEventListener("keydown", function quit(event) {
    if (event.key === "Escape") {
      modal.close();
    }
  });
};
