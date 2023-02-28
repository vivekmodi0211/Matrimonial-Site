const express = require("express");

const userRouter = express.Router();

/**
 * @route POST "/api/auth/login"
 */
userRouter.get(
    "/", (req, res) => {
        res.send("Success")
    }
);

module.exports = userRouter;
