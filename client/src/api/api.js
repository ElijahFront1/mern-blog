import axios from "axios"
import { API_URL } from "../config"

export const addPost = async (post) => {
    const { data } = await axios.post(`${API_URL}api/posts`, post)
    return data
}

export const deletePost = async (id) => {
    console.log(id);
    const { data } = await axios.delete(`${API_URL}api/posts/${id}`)
    return data
}

export const editPost = async (post) => {
    console.log(post);
    const { data } = await axios.put(`${API_URL}api/posts`, post)
    return data
}