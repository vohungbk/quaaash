import Cookies from 'js-cookie';

import { TOKEN_KEY } from './constants';

export const getCookie = (key = TOKEN_KEY) => {
  return Cookies.get(key);
};
