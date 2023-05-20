import PropTypes from 'prop-types';

import { useState } from 'react';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { Modal } from '../Modal/Modal';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ foundedPictures }) => {
  const [modalShow, setModalShow] = useState(false);

  const [largeImageURL, setLargeImageURL] = useState('');

  const [imageAlt, setImageAlt] = useState(0);

  const modalOpen = ({ largeImageURL, id }) => {
    setModalShow(true);
    setLargeImageURL(largeImageURL);
    setImageAlt(id);
  };

  const modalClose = () => {
    setModalShow(false);
  };

  return (
    <ul className={css.gallery}>
      {foundedPictures.map(picture => (
        <ImageGalleryItem
          key={picture.id}
          pictureForRender={picture}
          modalOpen={modalOpen}
        />
      ))}
      {modalShow && (
        <Modal modalClose={modalClose}>
          <img src={largeImageURL} alt={imageAlt} />
        </Modal>
      )}
    </ul>
  );
};

ImageGallery.propTypes = {
  foundedPictures: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

// export class ImageGallery extends Component {
//   state = { modalShow: false, largeImageURL: '', imageAlt: 0 };

//   modalOpen = ({ largeImageURL, id }) => {
//     this.setState({
//       modalShow: true,
//       largeImageURL: largeImageURL,
//       imageAlt: id,
//     });
//   };

//   modalClose = () => {
//     this.setState({ modalShow: false });
//   };

//   render() {
//     return (
//       <ul className={css.gallery}>
//         {this.props.foundedPictures.map(picture => (
//           <ImageGalleryItem
//             key={picture.id}
//             pictureForRender={picture}
//             modalOpen={this.modalOpen}
//           />
//         ))}
//         {this.state.modalShow && (
//           <Modal modalClose={this.modalClose}>
//             <img src={this.state.largeImageURL} alt={this.state.imageAlt} />
//           </Modal>
//         )}
//       </ul>
//     );
//   }
// }

// ImageGallery.propTypes = {
//   foundedPictures: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
// };
