import React from 'react';
import classNames from 'classnames';
import './Alert.scss';

const Alert = ({
  modalText,
  closeModal,
  displayModal,
}) => {
  const modalClasses = classNames('alert_container', { is_visible: displayModal });

  return (
    <div className={modalClasses}>
      <div role="presentation" onClick={closeModal} className="alert_overlay" />
      <div className="alert_content">
        <div className="alert">
          {modalText}
        </div>
      </div>
    </div>
  );
};
export default Alert;
