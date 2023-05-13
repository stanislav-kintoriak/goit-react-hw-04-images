import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'

export const ImageGallery = () => {
    return (
<ul className={css.gallery}>
    {/* map */}
<ImageGalleryItem />
</ul>
)
}