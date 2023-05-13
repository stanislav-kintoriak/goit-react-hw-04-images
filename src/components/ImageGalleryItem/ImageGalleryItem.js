import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = () => {
    return (
<li className={css.gallery-item}>
  <img className={css.gallery-item__img} src="" alt="" />
</li>
)
}