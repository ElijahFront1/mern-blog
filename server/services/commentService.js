import Comment from "../models/Comment.js";

class CommentService {
    async create(comment) {
        const createdComment = await Comment.create({ ...comment });
        return createdComment;
    }
    async getAll() {
        const comments = await Comment.find();
        return comments
    }
    async getOne(id) {
        if (!id) {
            throw new Error('id not specified')
        }
        const post = await Post.findById(id);
        return post;
    }
    async update(post) {
        if (!post._id) {
            throw new Error('id not specified')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true })
        return updatedPost
    }
    async delete(id) {
        if (!id) {
            throw new Error('id not specified')
        }
        const post = await Post.findByIdAndDelete(id)
        return post;
    }
}

export default new CommentService()