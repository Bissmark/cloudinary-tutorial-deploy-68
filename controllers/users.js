const User = require('../model/user');
const cloudinary = require('../utilities/cloudinary');

async function show(req, res) {
    const user = await User.findById(req.params.id);
    res.render('users/show', {title: 'Users Details', user});
}

async function create(req, res) {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(req.file.path);
        console.log(result);
        let user = new User({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id
        });

        await user.save();
        res.redirect(`/users/${user.id}`);
    } catch(err) {
        console.log(err);
    };
}

module.exports = {
    show,
    create
}