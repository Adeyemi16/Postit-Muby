import axios from "axios"
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL, instance } from "./connect"

export const registerUser = async (username, email, password) => {
    const res = await instance.post('/api/v1/auth/register', { username, email, password })
    return res
}

export const loginUser = async (username, password) => {
    const res = await instance.post('/api/v1/auth/login', { username, password })
    return res
}

export const getUserProfile = async (username, token) => {
    const res = await instance.get(`/api/v1/auth/user-profile/${username}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
    return res
}

export const updateUserProfile = async (profile, token) => {
    const res = await instance.put('/api/v1/auth/updateuser', profile,
        {
            headers: { Authorization: `Bearer ${token}` }
        })
    return res
}

export const uploadToCloudinary = async (file) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    const data = await axios.post(CLOUDINARY_URL, formData)
    return data
}

export const allStories = async () => {
    const res = await instance.get('/api/v1/story')
    return res
}

export const getAllStoryInTag = async (tagName) => {
    const res = await instance.get(`/api/v1/story/${tagName}`)
    return res
}

export const getStoryWithSlug = async (slugTitle) => {
    const res = await instance.get(`/api/v1/story/title/${slugTitle}`)
    return res
}

export const getUserStories = async (userId) => {
    const res = await instance.get(`/api/v1/story/users/${userId}/stories`)
    return res
}

export const editStory = async (storyTag, token) => {
    const res = await instance.put(`/edit/${storyTag}`,
        {
            headers: { Authorization: `Bearer ${token}` }
        })
    return res
}

export const addStory = async (userId, token) => {
    const res = await instance.post(`/add-story/${userId}`,
        {
            headers: { Authorization: `Bearer ${token}` }
        })
    return res
}

export const deleteStory = async (storyTag, token) => {
    const res = await instance.delete(`/delete/${storyTag}`,
        {
            headers: { Authorization: `Bearer ${token}` }
        })
    return res
}

