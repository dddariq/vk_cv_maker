import React from 'react';
import PropTypes from 'prop-types';
import { Button as VKUIButton } from '@vkontakte/vkui';

export default function Button({ children, style = {}, ...props }) {
  return (
    <VKUIButton size="l" stretched {...props} style={{ ...style }}>
      {children}
    </VKUIButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
