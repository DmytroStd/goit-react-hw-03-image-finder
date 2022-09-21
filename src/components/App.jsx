import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageFinder from './image_finder/ImageFinder';
export class App extends Component {
  state = {
    page: 1,
    search: '',
  };

  handleFormSubmt = search => {
    this.setState({ search, page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { search, page } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmt} />
        <ImageFinder query={search} loadMore={this.loadMore} page={page} />
        <ToastContainer autoClose={2000} theme="dark" />
      </>
    );
  }
}
