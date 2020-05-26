import { setup } from 'axios-cache-adapter';
import config from './config';

export const cms = setup({
  baseURL: `${config.cms.URL}`,
  cache: {
    maxAge: 15 * 60 * 1000
  }
});