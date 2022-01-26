const express = require('express')
const app = express()
const path = require('path')
const port = 3000


const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      console.log(file)
      cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})


app.set("view engine", "ejs");


app.get('/', function (req, res) {
  res.render('upload.ejs', {});
});

app.post("/upload", upload.single("upload") , (req, res) => {
  res.render('upload.ejs', {});
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})