import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Api } from './Api/Api';

export class App extends Component {
  state = {
    searchText: '',
    searchResults: null,
    inLoading: false,
    page: 1,
    foundedPictures: [],
    isPicturesExist: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.page !== this.state.page
    ) {
      this.setState({ inLoading: true });

      Api(this.state.searchText, this.state.page)
        .then(result => {
          if (result.totalHits === 0) {
            console.log(111);
          }
          if (prevState.searchText !== this.state.searchText) {
            this.setState({
              searchResults: result,
              foundedPictures: result.hits,
              isPicturesExist: false,
            });
            if (result.hits.length < result.totalHits) {
              this.setState({
                isPicturesExist: true,
              });
            }
          } else {
            if (
              this.state.page ===
              Math.ceil(
                this.state.searchResults.totalHits /
                  this.state.searchResults.hits.length
              )
            ) {
              this.setState({ isPicturesExist: false });
            }
            this.setState(prevState => ({
              foundedPictures: [...prevState.foundedPictures, ...result.hits],
            }));
          }
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.setState({ inLoading: false });
        });
    }
  }

  formSubmitHandler = searchText => {
    this.setState({
      searchText,
      page: 1,
      foundedPictures: [],
    });
  };

  loadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { inLoading, foundedPictures, isPicturesExist } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {foundedPictures.length !== 0 && (
          <ImageGallery foundedPictures={foundedPictures} />
        )}
        <Loader inLoading={inLoading} />
        {isPicturesExist && <LoadMoreButton onLoadMore={this.loadMore} />}
      </div>
    );
  }
}
