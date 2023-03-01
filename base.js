const express = require('express');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

const app = express();
app.post('/upload-image', upload.single('image'), (req, res) => {
  res.send('Image uploaded successfully.');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

