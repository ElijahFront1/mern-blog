import Router from 'express'
import CommentController from '../controller/commentController.js'
const router = new Router()

router.post('/comments', CommentController.create)
router.get('/comments', CommentController.getAll)
router.get('/comments/:id', CommentController.getOne)
router.put('/comments', CommentController.update)
router.delete('/comments/:id', CommentController.delete)

export default router;