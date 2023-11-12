import { createNewStory, deleteStory, editStory, getAllStory, getExactStoryByTagSlug, getStoryInTag, getUserStory } from "../controllers/Story.js";
import express from 'express'
import { verifyToken } from "../middleware/verifytoken.js"

const router = express.Router()

router.get('/', getAllStory)
router.get("/:tagName", getStoryInTag)
router.get('/title/:slugTitle', getExactStoryByTagSlug)
router.get('/users/:id/stories', getUserStory)
router.put('/edit/:id', verifyToken, editStory)
router.post('/add-story/:userId', verifyToken, createNewStory)
router.delete('/delete/:id', verifyToken, deleteStory)

export default router