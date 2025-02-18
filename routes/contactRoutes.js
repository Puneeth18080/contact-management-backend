const express=require("express");
const router=express.Router();
const {getContacts,getContact,createContact,updateContact,deletecontact,}=require("../controller/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deletecontact);
module.exports=router;
