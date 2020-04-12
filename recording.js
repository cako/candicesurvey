const express = require("express");
const fs = require("fs");
const AWS = require("aws-sdk");
const path = require("path");

let router = express.Router();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

function uploadToS3(filename) {
  const fileContent = fs.readFileSync(filename);

  // Setting up S3 upload parameters
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: path.join("recordings", filename), // File name you want to save as in S3
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
}

function toFile(audio, filename) {
  fs.writeFileSync(
    filename,
    Buffer.from(
      audio.replace("data:audio/ogg; codecs=opus;base64,", ""),
      "base64"
    )
  );
}

/* GET users listing. */
router.post("/:id", function (req, res, next) {
  let filename = req.params.id + ".ogg";
  let { audio } = req.body;

  try {
    toFile(audio, filename);
    console.log("Wrote to file " + filename);
  } catch (err) {
    console.log("File writing FAILED for " + filename);
    return res.sendStatus(500);
  }
  try {
    uploadToS3(filename);
    return res.sendStatus(201);
  } catch (err) {
    console.log("S3 upload FAILED for " + filename);
    return res.sendStatus(500);
  }
});

// http://localhost:5000/react/post/Ui7yGoYXg

module.exports = router;
