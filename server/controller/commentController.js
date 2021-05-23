import CommentService from "../services/commentService.js";

class CommentController {
    async create(req, res) {
        console.log(req.body);
        try {
            const comment = await CommentService.create(req.body)
            res.json(comment)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const comment = await CommentService.getAll();
            return res.json(comment)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await CommentService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await CommentService.update(req.body)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const post = await CommentService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new CommentController();