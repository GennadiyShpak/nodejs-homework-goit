const {Schema, model} = require("mongoose");

const contactSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: [true, "Set name for contact"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone is required"]
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
      }
}, {versionKey: false, timestamps: true})

const Contact = model("contact", contactSchema);
module.exports = Contact;

