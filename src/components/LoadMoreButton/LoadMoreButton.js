import PropTypes from 'prop-types';

import css from './LoadMoreButton.module.css';

export const LoadMoreButton = ({ onLoadMore }) => {
  return (
    <div className={css.button__container}>
      <button className={css.button} type="button" onClick={() => onLoadMore()}>
        Load more
      </button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
