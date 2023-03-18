const express = require("express");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const FILESTORAGE_DIRECTORY = "audio/";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // 'audio/' is the directory where the uploaded files will be stored
        callback(null, FILESTORAGE_DIRECTORY);
    },
    filename: (req, file, callback) => {
        let filename = req.params.name ?? file.originalname
        console.log(filename);
        callback(null, filename);
    }
});

const router = express.Router();
const upload = multer({ storage: storage }); 

router.get('/', async (req, res) => {
  // Read in stored files from the 'audio/directory'
  fs.readdir(FILESTORAGE_DIRECTORY, (err, files) => {
    if (err) {
      return res.status(500).send({ message: 'Error listing files in directory' });
    }

    // Return the list of files in the directory
    res.send({ files });
  });
});

// Endpoint for uploading mp3 files
router.post('/upload/:name?', upload.single('mp3'), (req, res) => {
  console.log(req.file);
  res.status(200).send('File uploaded successfully');
});

// Endpoint for deleting stored mp3 files
router.delete('/delete/:name', (req, res) => {
  const fileName = req.params.name; // Filename passed in the url
  const filePath = path.join(FILESTORAGE_DIRECTORY, fileName); // Actual path to file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to delete file, it probably does not exist or the filename is wrong...');
      return;
    }
    res.status(200).send('File deleted successfully');
  });
});

module.exports = router;
