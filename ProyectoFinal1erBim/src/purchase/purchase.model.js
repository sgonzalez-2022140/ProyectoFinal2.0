import mongoose, { Schema } from "mongoose"

const purchaseSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['CREATED', 'ACCEPTED', 'CANCELLED', 'COMPLETED'],
        default: 'CREATED',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: 'user'
    },
    product: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: 'product'
    }
}, {
    versionKey: false
}

)

export default mongoose.model('purchase', purchaseSchema)