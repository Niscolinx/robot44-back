const mongoose = require('mongoose')
const Schema = mongoose.Schema

const referralSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },

        upline: {
            type: String,
            required: true,
        },
   
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('referral', referralSchema)
