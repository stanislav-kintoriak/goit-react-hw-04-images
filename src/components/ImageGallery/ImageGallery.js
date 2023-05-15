import PropTypes from 'prop-types';

import { Component } from 'react';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { Modal } from '../Modal/Modal';

import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = { modalShow: false, largeImageURL: '', imageAlt: 0 };

  modalOpen = ({ largeImageURL, id }) => {
    this.setState({
      modalShow: true,
      largeImageURL: largeImageURL,
      imageAlt: id,
    });
  };

  modalClose = () => {
    this.setState({ modalShow: false });
  };

  render() {
    return (
      <ul className={css.gallery}>
        {this.props.foundedPictures.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            pictureForRender={picture}
            modalOpen={this.modalOpen}
          />
        ))}
        {this.state.modalShow && (
          <Modal modalClose={this.modalClose}>
            <img src={this.state.largeImageURL} alt={this.state.imageAlt} />
          </Modal>
        )}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  foundedPictures: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
