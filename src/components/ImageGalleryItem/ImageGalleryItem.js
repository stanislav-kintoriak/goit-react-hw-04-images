import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ pictureForRender, modalOpen }) => {
  const { webformatURL, largeImageURL, id } = pictureForRender;
  return (
    <li
      className={css.gallery - item}
      onClick={() => modalOpen({ largeImageURL, id })}
    >
      <img className={css.gallery - item__img} src={webformatURL} alt={id} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  modalOpen: PropTypes.func.isRequired,
  pictureForRender: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
