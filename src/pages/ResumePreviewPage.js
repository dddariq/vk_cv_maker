import React from 'react';
import PropTypes from 'prop-types';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  Div,
  Avatar,
  Button,  // Импортируем компонент Button
} from '@vkontakte/vkui';
import { exportPDF } from '../utils/exportPdf';  // Импортируем функцию exportPDF

export default function ResumePreviewPage({
  id, data, onNavigate, translations
}) {
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={() => onNavigate('form')}>
            <span style={{ color: '#4680C2', fontSize: 16 }}>Назад</span>
          </PanelHeaderButton>
        }
      >
        {translations.previewTitle}
      </PanelHeader>

      <Div style={{ padding: 0 }}>
        {!data ? (
          <Div style={{ textAlign: 'center', padding: 24 }}>
            Нет данных. Заполните форму.
          </Div>
        ) : (
          <div
            id="resume-preview"  // Добавляем id для элемента, который будем экспортировать
            style={{
              maxWidth: 820,
              margin: '0 auto',
              backgroundColor: '#fff',
              padding: 40,
              borderRadius: 12,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              fontFamily: 'Arial, sans-serif',
              color: '#1E1E1E',
              lineHeight: 1.6,
            }}
          >
            <div style={{ display: 'flex', gap: 24, alignItems: 'center', marginBottom: 32 }}>
              {data.photo && (
                <Avatar
                  size={96}
                  src={typeof data.photo === 'string' ? data.photo : URL.createObjectURL(data.photo)}
                  style={{ borderRadius: 12 }}
                />
              )}
              <div>
                <h2 style={{ margin: 0, fontSize: 26 }}>{data.firstName} {data.lastName}</h2>
                {data.position && (
                  <p style={{ margin: '6px 0 0', fontSize: 16, color: '#4680C2' }}>{data.position}</p>
                )}
              </div>
            </div>

            <Section title="Контакты">
              <p>Email: {data.email}</p>
              <p>Телефон: {data.phone}</p>
            </Section>

            {data.education && (
              <Section title="Образование">
                <p style={{ whiteSpace: 'pre-wrap' }}>{data.education}</p>
              </Section>
            )}

            {data.experience && (
              <Section title="Опыт работы">
                <p style={{ whiteSpace: 'pre-wrap' }}>{data.experience}</p>
              </Section>
            )}

            {data.skills && (
              <Section title="Навыки">
                <ul style={{ paddingLeft: 20 }}>
                  {data.skills.split(',').map((skill, index) => (
                    <li key={index}>{skill.trim()}</li>
                  ))}
                </ul>
              </Section>
            )}

            {data.additional && (
              <Section title="Дополнительная информация">
                <p style={{ whiteSpace: 'pre-wrap' }}>{data.additional}</p>
              </Section>
            )}

            {/* Кнопка для экспорта в PDF */}
            <Div style={{ marginTop: 20, textAlign: 'center' }}>
              <Button
                size="l"
                onClick={() => exportPDF('resume-preview', 'Resume')}  // Вызываем экспорт в PDF
                style={{ backgroundColor: '#4680C2', color: '#fff' }}
              >
                Экспортировать в PDF
              </Button>
            </Div>
          </div>
        )}
      </Div>
    </Panel>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ marginBottom: 8, fontSize: 18, color: '#4680C2' }}>{title}</h3>
      {children}
    </div>
  );
}

ResumePreviewPage.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  translations: PropTypes.object.isRequired,
};
