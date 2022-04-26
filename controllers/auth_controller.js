const express = require('express')
const bcrypt = required('bcryptjs')

//Import express to access Router function
const router = express.Router()

// creates an instance of the router
const { User } = require('..models')


// get all product routes
router.get('/login', (req, res) => {
    res.render('auth/login.ejs')
});

router.get('register', (req, res) => {
    res.render('auth/register.ejs')
});

router.post('register', async (req, res, next) => {
    try {
        const foundUser = await User.exists({email: req.body.email})
        if (foundUser) {
            return res. redirect('login')
        }
        const salt = await bcrypt.genSalt(5);
        console.log(salt);
        const hash = await bcrypt.hash(req.body.password, salt);
        console.log(hash);
        req.body.password = hash;
        const newUser = await User.create(req.body);

        return res.redirect('/login')
    } catch (error) {

    }
})

module.exports = router 