const { nanoid } = require("nanoid");

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf8");
  return JSON.parse(data);
}

async function getContactById(id) {
  const contacts = await listContacts();
  const queryContact = contacts.find((contact) => contact.id === id);

  if (!queryContact) {
    throw new Error("There is no contact with this ID in the list");
  }
  return queryContact;
}

async function removeContact(id) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === id);

  if (idx === -1) {
    throw new Error("There is no contact with this ID in the list");
  }

  contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
  return "Success";
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();

  if (
    contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    )
  ) {
    throw new Error("Contacts is already in a list");
  }

  const newContact = { id: nanoid(21), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");

  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
