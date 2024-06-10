const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactsSchema");

//@desc Get All Contacts
//@route GET /api/contacts
//@access Private
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Get Contact by id
//@route GET /api/contacts/:id
//@access Private
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Create Contact
//@route POST /api/contacts
//@access Private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id
  });
  res.status(201).json(contact);
});

//@desc Update a Contact by Id
//@route PUT /api/contacts/:id
//@access Private
const updateContactById = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw Error("All fields are mandatory");
  }
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(`You are not authourised to update other user's data`);
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc Delete a Contact by Id
//@route DELETE /api/contacts/:id
//@access Private
const deleteContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if(contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(`You are not authourised to update other user's data`);
  }
  await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContactById,
  deleteContactById,
};
