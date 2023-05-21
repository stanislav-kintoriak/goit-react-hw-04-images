import { useEffect, useCallback } from 'react';

import css from './Modal.module.css';

export const Modal = ({ modalClose, children }) => {

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        modalClose();
      }
    },
    [modalClose]
  );


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      modalClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={css.overlay}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.modalClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if ((event.currentTarget === event.target)) {
//       this.props.modalClose();
//     }
//   };

//   render() {
//     return (
//       <div onClick={this.handleBackdropClick} className={css.overlay}>
//         <div className={css.modal}>{this.props.children}</div>
//       </div>
//     );
//   }
// }
