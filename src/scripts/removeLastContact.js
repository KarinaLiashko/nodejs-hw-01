import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContacts = async () => {
  const contacts = await readContacts();
  //метод прибирає останню
  contacts.pop();
  await writeContacts(contacts);
};

removeLastContacts();
