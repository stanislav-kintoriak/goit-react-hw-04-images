import { useState, useEffect } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Api } from '../Api/Api';

export const App = () => {

const [searchText,setSearchText] = useState('');
const [searchResults, setSearchResults] = useState(null);
const [inLoading, setInLoading] = useState(false);
const [page, setPage] = useState(1);
const [foundedPictures, setFoundedPictures] = useState([]);
const [isPicturesExist, setIsPicturesExist] = useState(false);


useEffect(() => {
  if (searchText === '') {
    return;
  }

  setInLoading(true);
  setIsPicturesExist(false);

  Api(searchText, page)
    .then(result => {
      if (result.totalHits === 0) {
       alert('There are no results matching your query')
      }
      if (page === 1) {
        setFoundedPictures(result.hits);

        if (result.hits.length < result.totalHits) {
          setSearchResults(Math.ceil(result.totalHits / result.hits.length));

          setIsPicturesExist(true);
        }
      } else {
        setFoundedPictures(prevState => [...prevState, ...result.hits]);

        setIsPicturesExist(true);

        if (page === searchResults) {
          setIsPicturesExist(false);
        }
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      setInLoading(false);
    });
}, [searchText, page, searchResults]);
            


const formSubmitHandler = searchText => {
  setSearchText(searchText);
  setPage(1);
  setFoundedPictures([]);
    };
  
const loadMore = () => 
  setPage((prevState)=>prevState + 1 );


return (
        <div>
          <Searchbar onSubmit={formSubmitHandler} />
          {foundedPictures.length !== 0 && (
            <ImageGallery foundedPictures={foundedPictures} />
          )}
          <Loader inLoading={inLoading} />
          {isPicturesExist && <LoadMoreButton onLoadMore={loadMore} />}
        </div>
      );

}



// export class App extends Component {
//   state = {
//     searchText: '',
//     searchResults: null,
//     inLoading: false,
//     page: 1,
//     foundedPictures: [],
//     isPicturesExist: false,
//   };

//   componentDidUpdate(_, prevState) {
//     if (
//       prevState.searchText !== this.state.searchText ||
//       prevState.page !== this.state.page
//     ) {
//       this.setState({ inLoading: true });

//       Api(this.state.searchText, this.state.page)
//         .then(result => {
//           if (result.totalHits === 0) {
//             console.log(111);
//           }
//           if (prevState.searchText !== this.state.searchText) {
//             this.setState({
//               searchResults: result,
//               foundedPictures: result.hits,
//               isPicturesExist: false,
//             });
//             if (result.hits.length < result.totalHits) {
//               this.setState({
//                 isPicturesExist: true,
//               });
//             }
//           } else {
//             if (
//               this.state.page ===
//               Math.ceil(
//                 this.state.searchResults.totalHits /
//                   this.state.searchResults.hits.length
//               )
//             ) {
//               this.setState({ isPicturesExist: false });
//             }
//             this.setState(prevState => ({
//               foundedPictures: [...prevState.foundedPictures, ...result.hits],
//             }));
//           }
//         })
//         .catch(error => console.log(error))
//         .finally(() => {
//           this.setState({ inLoading: false });
//         });
//     }
//   }

//   formSubmitHandler = searchText => {
//     this.setState({
//       searchText,
//       page: 1,
//       foundedPictures: [],
//     });
//   };

//   loadMore = () => {
//     this.setState({ page: this.state.page + 1 });
//   };

//   render() {
//     const { inLoading, foundedPictures, isPicturesExist } = this.state;

//     return (
//       <div>
//         <Searchbar onSubmit={this.formSubmitHandler} />
//         {foundedPictures.length !== 0 && (
//           <ImageGallery foundedPictures={foundedPictures} />
//         )}
//         <Loader inLoading={inLoading} />
//         {isPicturesExist && <LoadMoreButton onLoadMore={this.loadMore} />}
//       </div>
//     );
//   }
// }
