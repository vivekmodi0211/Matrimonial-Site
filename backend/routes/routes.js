const express = require("express");
const userRouter = require("./User/user.js");

const router = express.Router();
router.use("/api/user", userRouter);

module.exports = router;
