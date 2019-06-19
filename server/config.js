require('dotenv').config({ path: 'variables.env' });

module.exports = {
    PORT: process.env.PORT || '4000'
};