const multer = require("multer")
//path : agar bisa mengakses folder file project
const path = require("path")

//prosses upload multer disimpan di middleware karena : 
//middleware  : penghubung/tengah proses (route - middleware -controller
//sebelum fike di akses controller, oleh middleware di proses dulu agar siap digunakan)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //file yang di upload akan disimpan di folder project bagian uploads
    cb(null, path.join(__dirname, "../uploads"))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //mengambil .jpg/.png dari nama asli file
    const ext = path.extname(file.originalname);
    //uniqueSufflix isinya nama fike random, ext isinya .jpg jadi perlu digabung
    const name = file.fieldname + '-' + uniqueSuffix + ext ;
    cb(null, name)
  }
})

module.exports = multer({ storage: storage })