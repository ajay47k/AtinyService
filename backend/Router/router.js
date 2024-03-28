const express = require("express")
const {shortenURL,redirectURL,analytics} = require("./../Controller/URL")
const router = express.Router()
// const {} = require()/
router.route("/").post(shortenURL)
router.route("/:shortId").get(redirectURL)
router.get("/analytics/:shortId", analytics);
module.exports = router 