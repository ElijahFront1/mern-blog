import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }]
})

export default mongoose.model('Post', Post)