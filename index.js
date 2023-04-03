const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require("./contacts");

// addContact("bill", "bill@com", "123123123")
//   .then((resp) => console.log(resp))
//   .catch((err) => console.error(err));

listContacts()
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err));

// getContactById("LZUjRH_0dOJkYx8ggZmIe")
//   .then((resp) => console.log(resp))
//   .catch((err) => console.error(err));

// removeContact("uCEYSTawZjwSbsrFccuz1")
//   .then((resp) => console.log(resp))
//   .catch((err) => console.error(err));
