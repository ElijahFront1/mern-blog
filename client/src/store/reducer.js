const SET_POSTS = "SET_POSTS"
const SET_POST = "SET_POST"
const DELETE_POST = "DELETE_POST"
const EDIT_POST = "EDIT_POST"

const defaultState = {
    posts: [],
}

export default function reducers(state = defaultState, action) {
    console.log(action.payload);
    console.log(action.type);
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload }
        case SET_POST:
            return { ...state, posts: [...state.posts, action.payload] }
        case DELETE_POST:
            return { ...state, posts: [...state.posts.filter(post => post._id !== action.payload)] }
        case EDIT_POST:
            const editPostIndex = state.posts.findIndex(post => post._id === action.payload._id);
            return { ...state, posts: [...state.posts, state.posts[editPostIndex] = action.payload] }
        default:
            return state
    }
}
