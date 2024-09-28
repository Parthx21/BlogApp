const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

const contact = '../views/layouts/contact';

router.get('/contact', async (req, res) => {
  

  try {
    const locals = {
        title: "Contact",
        description: "Contact Page"
      }
    res.render('contact/index', { locals, layout:contact });
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;