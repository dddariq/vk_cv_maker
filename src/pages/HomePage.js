import React from 'react';
import PropTypes from 'prop-types';
import {
  Panel,
  PanelHeader,
  Div,
  IconButton
} from '@vkontakte/vkui';
import { Icon28GlobeOutline } from '@vkontakte/icons';
import AppHeader from '../components/AppHeader';

export default function HomePage({
  id,
  onNavigate,
  language,
  onChangeLanguage,
  translations
}) {
  return (
    <Panel id={id}>
      <PanelHeader>{translations.appTitle}</PanelHeader>
      <Div
        style={{
          position: 'relative',
          height: 'calc(100vh - 56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AppHeader
          text={translations.createText}
          buttonText={translations.createButton}
          onCreate={() => onNavigate('form')}
        />

        <IconButton
          onClick={() => onChangeLanguage(language === 'ru' ? 'en' : 'ru')}
          aria-label="language"
          style={{
            position: 'absolute',
            right: 16,
            bottom: 16,
            width: 56,
            height: 56,
            color: '#4680C2',
          }}
        >
          <Icon28GlobeOutline width={32} height={32} fill="#4680C2" />
        </IconButton>
      </Div>
    </Panel>
  );
}

HomePage.propTypes = {
  id: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  language: PropTypes.oneOf(['ru', 'en']).isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  translations: PropTypes.object.isRequired,
};
