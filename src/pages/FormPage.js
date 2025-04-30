import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  Div,
  FormLayoutGroup,
  FormItem,
  Input,
  File,
  Textarea,
  Button,
  Avatar,
} from '@vkontakte/vkui';
import { Icon28ArrowLeftOutline } from '@vkontakte/icons';

export default function FormPage({ id, onNavigate, translations }) {
  const [form, setForm] = useState({
    lastName: '', firstName: '', patronymic: '', photo: null,
    position: '', salary: '', education: '', skills: '',
    experience: '', email: '', phone: '', additional: '',
  });
  const [errors, setErrors] = useState({});
  const [photoLoaded, setPhotoLoaded] = useState(false);

  useEffect(() => {
    bridge.send('VKWebAppGetUserInfo').then(data => {
      setForm(f => ({
        ...f,
        lastName: data.last_name,
        firstName: data.first_name,
        photo: data.photo_100,
      }));
      setPhotoLoaded(true);
    });
  }, []);

  const handleChange = field => e => {
    if (field === 'photo') {
      const file = e.target.files[0];
      setForm(f => ({ ...f, photo: file }));
      setPhotoLoaded(!!file);
    } else {
      setForm(f => ({ ...f, [field]: e.target.value }));
    }
  };

  const validate = () => {
    const req = ['lastName','firstName','photo','education','experience','email','phone'];
    const errs = {};
    req.forEach(f => { if (!form[f]) errs[f] = true; });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    onNavigate('resume', form);
  };

  return (
    <Panel id={id}>
      <PanelHeader
        right={
          <PanelHeaderButton onClick={() => onNavigate('home')}>
            <span style={{ color: '#4680C2', fontSize: 16 }}>Назад</span>
          </PanelHeaderButton>
        }
      >
        {translations.formTitle}
      </PanelHeader>

      <Div>
        <FormLayoutGroup mode="vertical">
          <FormItem top={translations.field.lastName} status={errors.lastName ? 'error' : ''} bottom={errors.lastName && translations.errorRequired}>
            <Input value={form.lastName} onChange={handleChange('lastName')} />
          </FormItem>

          <FormItem top={translations.field.firstName} status={errors.firstName ? 'error' : ''} bottom={errors.firstName && translations.errorRequired}>
            <Input value={form.firstName} onChange={handleChange('firstName')} />
          </FormItem>

          <FormItem top={translations.field.patronymic}>
            <Input value={form.patronymic} onChange={handleChange('patronymic')} />
          </FormItem>

          <FormItem top={translations.field.photo} status={errors.photo ? 'error' : ''} bottom={errors.photo && translations.errorRequired}>
            {photoLoaded && (
              <Div style={{ marginBottom: 8, color: '#4caf50' }}>
                {translations.field.photo} загружено
              </Div>
            )}
            <File before="Выберите файл" accept="image/*" onChange={handleChange('photo')} />
          </FormItem>

          <FormItem top={translations.field.position}>
            <Input value={form.position} onChange={handleChange('position')} />
          </FormItem>
          <FormItem top={translations.field.salary}>
            <Input value={form.salary} onChange={handleChange('salary')} placeholder="руб./мес." />
          </FormItem>
          <FormItem top={translations.field.education} status={errors.education ? 'error' : ''} bottom={errors.education && translations.errorRequired}>
            <Textarea value={form.education} onChange={handleChange('education')} />
          </FormItem>
          <FormItem top={translations.field.skills}>
            <Textarea value={form.skills} onChange={handleChange('skills')} />
          </FormItem>
          <FormItem top={translations.field.experience} status={errors.experience ? 'error' : ''} bottom={errors.experience && translations.errorRequired}>
            <Textarea value={form.experience} onChange={handleChange('experience')} />
          </FormItem>
          <FormItem top={translations.field.email} status={errors.email ? 'error' : ''} bottom={errors.email && translations.errorRequired}>
            <Input type="email" value={form.email} onChange={handleChange('email')} />
          </FormItem>
          <FormItem top={translations.field.phone} status={errors.phone ? 'error' : ''} bottom={errors.phone && translations.errorRequired}>
            <Input type="tel" value={form.phone} onChange={handleChange('phone')} />
          </FormItem>
          <FormItem top={translations.field.additional}>
            <Textarea value={form.additional} onChange={handleChange('additional')} />
          </FormItem>

          <Button size="l" stretched onClick={handleSave}>
            {translations.field.save}
          </Button>
        </FormLayoutGroup>
      </Div>
    </Panel>
  );
}

FormPage.propTypes = {
  id: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  translations: PropTypes.object.isRequired,
};
