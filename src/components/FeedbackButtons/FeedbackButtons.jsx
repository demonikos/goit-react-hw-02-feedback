import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackButtons = ({ btnNames, btnClick }) => {
  const btnArray = btnNames.map((el, index) => (
    <button key={index} type="button" onClick={btnClick}>
      {el}
    </button>
  ));
  return [btnArray];
};

FeedbackButtons.propTypes = {
  btnNames: PropTypes.arrayOf(PropTypes.string.isRequired),
  btnClick: PropTypes.func.isRequired,
};
