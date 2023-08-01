import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackBtn = ({ types, onLeaveFeedback }) => {
  return (
    <>
      {types.map(typeBtn => (
        <Button key={typeBtn} onClick={() => onLeaveFeedback(typeBtn)}>
          {typeBtn}
        </Button>
      ))}
    </>
  );
};

FeedbackBtn.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
