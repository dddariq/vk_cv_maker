import React from 'react';
import PropTypes from 'prop-types';
import { Div, Title, Button } from '@vkontakte/vkui';
import logo from '../assets/logo.svg'; // Импорт логотипа

export default function AppHeader({ text, buttonText, onCreate }) {
  return (
    <Div style={{ textAlign: 'center' }}>
      <img
        src={logo}
        alt="Логотип"
        style={{
          width: 180,
          height: 180,
          margin: '0 auto 48px',
          borderRadius: 20,
          objectFit: 'cover',
        }}
      />
      <Title level="1" style={{ margin: '0 auto 48px', maxWidth: 320, fontSize: '28px', lineHeight: '36px' }}>
        {text}
      </Title>
      <Button size="l" mode="primary" stretched onClick={onCreate}>
        {buttonText}
      </Button>
    </Div>
  );
}

AppHeader.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
};
