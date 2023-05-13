import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleSubmit = event => {
    event.preventDefault();

// !!!
  };

  handleChange = event => {
    this, setState({ serchText: event.target.value.toLowercase() });
  };

  stateReset = () => {
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.button}>
            <span className={css.button-label}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchText}
            onChange={this.handleSubmit}
          />
        </form>
      </header>
    );
  }
}
