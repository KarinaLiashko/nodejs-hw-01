import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  //передаємо всі контакти що були
  const contacts = await readContacts();
  //створюємо новий
  const newContact = createFakeContact();
  //перезаписуємо додаючи в кінець новий контакт
  await writeContacts([...contacts, newContact]);
};

addOneContact();
