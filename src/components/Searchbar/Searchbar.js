import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ReactComponent as Icon } from '../svgs/icon.svg';

export class Searchbar extends Component {
  state = {
    searchText: '',
  };

  handleSubmit = event => {
    event.preventDefault();
if(this.state.searchText.trim()=== ''){
    return
}
this.props.onSubmit(this.state.searchText);
this.state.reset();
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
        <form className={css.form} onSubmit = {this.state.handleSubmit}>
          <button type="submit" className={css.search_button}>
            <Icon/>
          </button>

          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}


Searchbar.propTypes = {
    onSubmit:func.isRequired
}