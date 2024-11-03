import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = (contacts) =>
  writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
//1 аргумент - що потрібно перетворити в строку; 2 - що на що замфнити; 3 - відступи
