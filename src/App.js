import React, { useState } from 'react';
import { View } from '@vkontakte/vkui';

import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import ResumePreviewPage from './pages/ResumePreviewPage';

export default function App({ language, onChangeLanguage, translations }) {
  const [activePanel, setActivePanel] = useState('home');
  const [formData, setFormData] = useState(null);

  const navigate = (panel, data) => {
    if (data) setFormData(data);
    setActivePanel(panel);
  };

  return (
    <View activePanel={activePanel} style={{ height: '100vh' }}>
      <HomePage
        id="home"
        onNavigate={navigate}
        language={language}
        onChangeLanguage={onChangeLanguage}
        translations={translations}
      />
      <FormPage
        id="form"
        onNavigate={navigate}
        translations={translations}
      />
      <ResumePreviewPage
        id="resume"
        data={formData}
        onNavigate={navigate}
        translations={translations}
      />
    </View>
  );
}
