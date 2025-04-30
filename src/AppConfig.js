import React, { useEffect, useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import App from './App';
import { translations } from './utils/i18n';
import { transformVKBridgeAdaptivity } from './utils/transformVKBridgeAdaptivity';

export default function AppConfig() {
  useEffect(() => {
    bridge.send('VKWebAppInit');
  }, []);
  const [language, setLanguage] = useState('ru');
  return (
    <ConfigProvider isWebView locale={language}>
      <AdaptivityProvider {...transformVKBridgeAdaptivity()}>
        <App
          language={language}
          onChangeLanguage={setLanguage}
          translations={translations[language]}
        />
      </AdaptivityProvider>
    </ConfigProvider>
  );
}
