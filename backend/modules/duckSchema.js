const { Schema, model } = require('mongoose');

const duckSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        maxlength: 20,
        match: [/^[a-zA-Z]+$/, 'must contain only letters'],
    },
    owner: {
        type: String,
        default: '',
        maxlength: 50,

    },
    quote: {
        type: String,
        default: '',
        maxlength: 50,
    },
    image: {
        type: String,
        require: true,
        match: [
            /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
            'is not a valid URL',
        ],
    },
    
});

const Duck = model('Duck', duckSchema)