const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const referralSchema = new Schema(
    {
        totalReferralCommission: {
            type: Number,
            required: true,
        },
        totalReferrals: {
            type: Number,
            required: true,
        },
        activeReferrals: {
            type: Number,
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

module.exports = mongoose.model('referral', referralSchema);
