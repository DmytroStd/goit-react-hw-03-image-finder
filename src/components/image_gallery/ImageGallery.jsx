import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <ul className={styles.gallery}>
        {this.props.images.map(({ webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={webformatURL}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            toggleModal={toggleModal}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
    })
  ),
};
