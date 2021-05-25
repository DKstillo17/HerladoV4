import mongoose from 'mongoose';

const newSchema = mongoose.Schema({
    title: String,
    description: String,
    resume: String,
    category: String,
    autor: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const newMessage = mongoose.model('newMessage', newSchema);

export default newMessage;
