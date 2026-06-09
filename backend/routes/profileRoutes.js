const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/profile.json");

// GET profile data
router.get("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading profile data" });
    }

    res.json(JSON.parse(data));
  });
});

// UPDATE profile data
router.put("/", (req, res) => {
  const updatedProfile = req.body;

  fs.writeFile(
    filePath,
    JSON.stringify(updatedProfile, null, 2),
    "utf8",
    (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error updating profile data" });
      }

      res.json({
        message: "Profile updated successfully",
        data: updatedProfile,
      });
    }
  );
});

module.exports = router;