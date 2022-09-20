import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  toggleModal,
}) => {
  const getDataValue = () => {
    toggleModal(largeImageURL);
  };

  return (
    <li className={styles.item}>
      <img
        className={styles.img}
        src={webformatURL}
        alt={tags}
        onClick={getDataValue}
        data-largeimg={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  toggleModal: PropTypes.func,
};
