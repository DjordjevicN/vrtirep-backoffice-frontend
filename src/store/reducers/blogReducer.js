const blog = {
    blog: {},
    blogList: [],

}
const blogReducer = (state = blog, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "NOTIFICATION":
            newState.notification = action.payload;
            break;
        case "CREATE_BLOG":
            newState.notification = action.payload;
            break;
        case "GET_BLOG":
            newState.notification = action.payload;
            break;
        case "GET_BLOG_FILTER":
            newState.notification = action.payload;
            break;
        case "UPDATE_BLOG":
            newState.notification = action.payload;
            break;
        case "DELETE_BLOG":
            newState.notification = action.payload;
            break;

        // *************************************** 
        default:
            newState = state
    }
    return newState;
}

export default blogReducer