var express = require('express');
var User = require('../models/user');

exports.signupForm = function(req, res) {
    res.render('accounts/new');
};


