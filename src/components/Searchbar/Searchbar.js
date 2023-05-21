import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ReactComponent as Icon } from '../../svgs/icon.svg';


export const Searchbar = ({onSubmit}) => {


  const [searchText,setSearchText] = useState('')


const  handleSubmit = event => {
        event.preventDefault();
        if (searchText.trim() === '') {
          return;
        }
        onSubmit(searchText);
        stateReset();
      };
    
const  handleChange = event => {
        setSearchText(event.target.value.toLowerCase());
      };
    
const  stateReset = () => {
        setSearchText('');
      };




  return (<header className={css.searchbar}>
            <form className={css.form} onSubmit={handleSubmit}>
              <button type="submit" className={css.search_button}>
                <Icon />
              </button>
    
              <input
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={searchText}
                onChange={handleChange}
              />
            </form>
          </header>
        );

}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};











// export class Searchbar extends Component {
//   state = {
//     searchText: '',
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.searchText.trim() === '') {
//       return;
//     }
//     this.props.onSubmit(this.state.searchText);
//     this.stateReset();
//   };

//   handleChange = event => {
//     this.setState({ searchText: event.target.value.toLowerCase() });
//   };

//   stateReset = () => {
//     this.setState({ searchText: '' });
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.form} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.search_button}>
//             <Icon />
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.searchText}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }


