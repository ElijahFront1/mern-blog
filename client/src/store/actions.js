import axios from 'axios'
import { API_URL } from "../config";

let postsURL = `${API_URL}api/posts`
let commentsURL = `${API_URL}api/comments`

export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get(postsURL)
    dispatch(setPosts(response.data))

}

export const addPostAction = data => async (dispatch) => {
    dispatch(setPost(data))
}

export const deletePostAction = id => async (dispatch) => {
    dispatch(deletePost(id))
}

export const editPostAction = data => async (dispatch) => {
    console.log(data);
    dispatch(editPost(data))
}


export const setPosts = (data) => ({ type: 'SET_POSTS', payload: data })
export const setPost = (data) => ({ type: 'SET_POST', payload: data })
export const deletePost = (id) => ({ type: 'DELETE_POST', payload: id })
export const editPost = (data) => ({ type: 'EDIT_POST', payload: data })