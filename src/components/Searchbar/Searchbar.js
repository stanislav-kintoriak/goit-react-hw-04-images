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
      <header className="searchbar">
        <form className="form">
          <button type="submit" class="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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
