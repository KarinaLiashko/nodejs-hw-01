import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  const data = await readFile(PATH_DB, 'utf-8');
  //текст перетворюємо на масив обєктів
  return JSON.parse(data);
};
