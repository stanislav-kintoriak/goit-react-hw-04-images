import PropTypes from 'prop-types';

import { Component } from 'react';

import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.clearEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.modalClose();
    }
  };

  handleBackdropClick = event => {
    if ((event.currentTarget = event.target)) {
      this.props.modalClose();
    }
  };

  render() {
    return (
      <div onClick={this.handleBackdropClick} className={css.overlay}>
        <div className={css.modal}>{this.props.children}</div>
      </div>
    );
  }
}
