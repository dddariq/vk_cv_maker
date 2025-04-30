export const defaultTemplate = (data) => {
  const photoUrl = data.photo
    ? typeof data.photo === 'string'
      ? data.photo
      : URL.createObjectURL(data.photo)
    : '';

  return `
    <div style="font-family: Arial, sans-serif; background-color: #fff; color: #1E1E1E; padding: 40px; max-width: 800px; margin: auto; line-height: 1.6;">
      <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px;">
        ${photoUrl ? `<img src="${photoUrl}" alt="Фото" style="width: 96px; height: 96px; border-radius: 12px; object-fit: cover;" />` : ''}
        <div>
          <h1 style="margin: 0; font-size: 24px;">${data.firstName} ${data.lastName}</h1>
          ${data.position ? `<p style="margin: 4px 0 0; font-size: 16px; color: #4680C2;">${data.position}</p>` : ''}
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h2 style="font-size: 18px; color: #4680C2;">Контакты</h2>
        <p>Email: ${data.email}</p>
        <p>Телефон: ${data.phone}</p>
      </div>

      ${data.education ? `
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 18px; color: #4680C2;">Образование</h2>
          <p style="white-space: pre-wrap;">${data.education}</p>
        </div>` : ''}

      ${data.experience ? `
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 18px; color: #4680C2;">Опыт работы</h2>
          <p style="white-space: pre-wrap;">${data.experience}</p>
        </div>` : ''}

      ${data.skills ? `
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 18px; color: #4680C2;">Навыки</h2>
          <ul style="padding-left: 20px;">
            ${data.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
          </ul>
        </div>` : ''}

      ${data.additional ? `
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 18px; color: #4680C2;">Дополнительная информация</h2>
          <p style="white-space: pre-wrap;">${data.additional}</p>
        </div>` : ''}
    </div>
  `;
};
