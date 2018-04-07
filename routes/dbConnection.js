var config=require('../configfiles/config.json')

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host     : config.dbhost,
      user     : config.dbuser,
      password : config.dbpassword,
      database : config.dbdatabase,
      charset  : config.dbcharset
    }
  });
module.exports = require('bookshelf')(knex);