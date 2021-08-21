const user = {
    authUser: { id: 1, userName: 'Nikola', email: 'nikola.dj.87@gmail.com', phoneNumber: "0600322301", },
    users: [
        { id: 1, userName: 'Nikola', email: 'nikola.dj.87@gmail.com', phoneNumber: "0600322301", },
        { id: 2, userName: 'Tamara', email: 'tamara@vrtirep.com', phoneNumber: "060000007", }
    ],
}
const initReducer = (state = user, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "NOTIFICATION":
            newState.notification = action.payload;
            break;
        case "CREATE_USER":
            newState.notification = action.payload;
            break;
        case "GET_USER":
            newState.notification = action.payload;
            break;
        case "GET_USER_FILTER":
            newState.notification = action.payload;
            break;
        case "UPDATE_USER":
            newState.notification = action.payload;
            break;
        case "DELETE_USER":
            newState.notification = action.payload;
            break;

        // *************************************** 
        default:
            newState = state
    }
    return newState;
}

export default initReducer