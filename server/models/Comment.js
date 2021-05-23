import mongoose from 'mongoose';

const Comment = new mongoose.Schema({
    text: { type: String, required: true },
    postId: { type: mongoose.Types.ObjectId, ref: 'Post' },
})

export default mongoose.model('Comment', Comment)