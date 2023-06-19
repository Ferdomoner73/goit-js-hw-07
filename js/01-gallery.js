import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsListEl = document.querySelector('.gallery');

const instance = basicLightbox.create(`
        <div class="modal">
            <img src="">
        </div>
    `, {
    onShow: (instance) => {
        instance.element().querySelector('.modal').onclick = instance.close
    }
})

const completedGallery = galleryItems
    .map(({ preview, original, description }) => {
        return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `
    })
    .join("");

galleryItemsListEl.insertAdjacentHTML('beforeend', completedGallery);

const handleClickOnGallaryEl = (e) => {

    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return
    };

    const originalImgUrl = e.target.dataset.source;
    // modalEl.target.src = originalImgUrl;
    
    instance.show();
    
    const modalEl = document.querySelector('.modal');
    modalEl.firstElementChild.src = originalImgUrl;

    document.addEventListener('keydown', closeModalOnEsc);
};

const closeModalOnEsc = (e) => {
    if (e.key === 'Escape') {
        document.removeEventListener('keydown', closeModalOnEsc);
        instance.close();
    };
};

galleryItemsListEl.addEventListener('click', handleClickOnGallaryEl);










