import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  //беремо контакти що були:
  const contacts = await readContacts();
  // створюємо нові контакти:
  const newContacts = Array(number).fill(0).map(createFakeContact);
  //обєднуємо:
  const result = [...contacts, ...newContacts];
  //перезаписуємо:
  await writeContacts(result);
};

generateContacts(5);
