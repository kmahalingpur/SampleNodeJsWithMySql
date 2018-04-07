var bookshelf = require('./dbConnection');//DB Connection details
var nodemailer = require('nodemailer');
var config=require('../configfiles/config.json');

//Declare table name variable through bookself to access using alias
var Profile = bookshelf.Model.extend({
    tableName: 'corporate_profile'
});


var self = module.exports = {
    //sample function to fetch all records from table corporate profile with alias 'Profile'
    getProfile: function (corporate_id, callback) {
        new Profile()
            .where({ corporate_id: corporate_id })
            .fetchAll()
            .then(function (profile_res) {
                if (profile_res == null) {
                    callback(null, false)
                } else {
                    callback(profile_res.toJSON(), false)
                }
            })
            .catch(function (err) {
                console.log(err)
                callback(null, true)
            });
    }
};