var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    activities: [{
        activityID: {type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}
    }]
});

module.exports = mongoose.model('User', userSchema);