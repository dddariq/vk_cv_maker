import bridge from '@vkontakte/vk-bridge';

export const fetchUserInfo = async () => {
  try {
    const userInfo = await bridge.send('VKWebAppGetUserInfo');
    return {
      firstName: userInfo.first_name || '',
      lastName: userInfo.last_name || '',
      photo: userInfo.photo_200 || '',
    };
  } catch (error) {
    console.error('Ошибка при получении данных пользователя VK:', error);
    return { firstName: '', lastName: '', photo: '' };
  }
};
