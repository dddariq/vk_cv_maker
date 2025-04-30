import React from 'react';
import PropTypes from 'prop-types';
import { Div, Button, Title } from '@vkontakte/vkui';

export default function AppHeader({ theme, text, buttonText, onCreate }) {
  return (
    <Div
      style={{
        textAlign: 'center',
        paddingTop: 100,
        paddingBottom: 100,
      }}
    >
      {/* Логотип-плейсхолдер */}
      <div
        style={{
          width: 180,
          height: 180,
          backgroundColor: 'red',
          margin: '0 auto 48px',
          borderRadius: 20,
        }}
      />
      {/* Слоган */}
      <Title
        level="1"
        style={{
          margin: '0 auto 48px',
          maxWidth: 320,
          color: theme === 'dark' ? '#fff' : '#000',
          fontSize: '28px',
          lineHeight: '36px',
        }}
      >
        {text}
      </Title>
      {/* Кнопка */}
      <Button
        size="xl"
        mode="primary"
        stretched
        onClick={onCreate}
        style={{
          width: '70%',
          maxWidth: 300,
          padding: '18px 0',
          fontSize: '20px',
        }}
      >
        {buttonText}
      </Button>
    </Div>
  );
}

AppHeader.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
};
