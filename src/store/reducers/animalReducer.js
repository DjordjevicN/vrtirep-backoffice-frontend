const animal = {
    animal: {},
    animalList: [],

}
const animalReducer = (state = animal, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "NOTIFICATION":
            newState.notification = action.payload;
            break;
        case "CREATE_ANIMAL":
            newState.notification = action.payload;
            break;
        case "GET_ANIMAL":
            newState.notification = action.payload;
            break;
        case "GET_ANIMAL_FILTER":
            newState.notification = action.payload;
            break;
        case "UPDATE_ANIMAL":
            newState.notification = action.payload;
            break;
        case "DELETE_ANIMAL":
            newState.notification = action.payload;
            break;

        // *************************************** 
        default:
            newState = state
    }
    return newState;
}

export default animalReducer