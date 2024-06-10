const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  getContactById,
  createContact,
  updateContactById,
  deleteContactById,
} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateToken");

// router.get("/", getAllContacts);

// router.get("/:id", getContactById);

// router.post("/", createContact);

// router.put("/:id", updateContactById);

// router.delete("/:id", deleteContactById);

router.use(validateToken);
router.route('/').get(getAllContacts).post(createContact);
router.route('/:id').get(getContactById).put(updateContactById).delete(deleteContactById);

module.exports = router;
