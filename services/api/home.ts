import Api from '@services/httpClient';
import { HomeData } from 'shared/type';

export const getHomeData = async () => {
  try {
    const result = await Api.get('open/home').then(
      (res) => res.data.data as HomeData
    );
    return result;
  } catch (error) {
    return error;
  }
};
