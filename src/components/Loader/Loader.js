import PropTypes from 'prop-types';

import { ThreeDots } from 'react-loader-spinner';

import css from './Loader.module.css'

export const Loader = ({ inLoading }) => {
  return (
    inLoading && (
      <div className={css.loader__container}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    )
  );
};

Loader.propTypes = {
  inLoading: PropTypes.bool.isRequired,
};
