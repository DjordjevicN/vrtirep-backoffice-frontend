const banners = {
    banner: {},
    bannersList: [],

}
const bannerReducer = (state = banners, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "NOTIFICATION":
            newState.notification = action.payload;
            break;
        case "CREATE_BANNER":
            newState.notification = action.payload;
            break;
        case "GET_BANNER":
            newState.notification = action.payload;
            break;
        case "GET_BANNER_FILTER":
            newState.notification = action.payload;
            break;
        case "UPDATE_BANNER":
            newState.notification = action.payload;
            break;
        case "DELETE_BANNER":
            newState.notification = action.payload;
            break;

        // *************************************** 
        default:
            newState = state
    }
    return newState;
}

export default bannerReducer