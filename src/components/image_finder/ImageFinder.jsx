import { Component } from 'react';
import Pixabay from 'components/api/api';
import ImageGallery from 'components/image_gallery/ImageGallery';
import Loader from '../loader/Loader';
import Modal from '../modal/Modal';
import Button from 'components/button/Button';

export default class ImageFinder extends Component {
  state = {
    images: null,
    loading: false,
    largeImageURL: '',
    error: null,
    total: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.props;
    const prevImage = prevProps.query;
    const nextImage = this.props.query;
    if (prevImage !== nextImage) {
      try {
        this.setState({ loading: true, page: 1 });
        const responce = await Pixabay(page, nextImage);
        this.setState({
          images: responce.data.hits,
          total: responce.data.total,
        });
      } catch (error) {
        console.log('error', error);
        console.log('message', error.message);
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevProps.page !== page && page !== 1) {
      try {
        this.setState({ loading: true });
        const responce = await Pixabay(page, nextImage);
        this.setState({ images: [...prevState.images, ...responce.data.hits] });
      } catch (error) {
        console.log('error', error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  toggleModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    const { page, images, loading, error, total, largeImageURL } = this.state;
    const { loadMore } = this.props;

    return (
      <>
        {loading && <Loader />}
        {images && (
          <ImageGallery
            images={this.state.images}
            toggleModal={this.toggleModal}
          />
        )}
        {12 * page <= total && <Button onClick={loadMore} text={'load more'} />}
        {largeImageURL && (
          <Modal onClose={this.toggleModal} src={largeImageURL} />
        )}
        {error && <p>(error.message)</p>}
      </>
    );
  }
}
