const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '/uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toDateString, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //reject a file
    if(file.mimetype === 'image/png' || file.mimetype === 'image/png') {
       cb(null, true);
    } else {
       cb(null, false);
    }
}
const upload = multer({storage: storage, limits : {
    fileSize: 1024 * 1024 * 5
},fileFilter: fileFilter });



module.exports = app => {
    const { 
        addUser,
        getUsers,
        getUserById,
        updateUser,
        deleteUser
    } = require('../controllers/user.controller');

    app.post('/user', upload.single('productImage'),addUser);
    app.get('/user', getUsers);
    app.get('/user/:id', getUserById);
    app.put('/user/:id', updateUser);
    app.delete('/user/:id', deleteUser);
}