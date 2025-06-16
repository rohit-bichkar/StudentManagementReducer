
function studentReducer(state,action){
    switch(action.type){
        case 'ADD':
            return[...state, action.payload];
        case 'EDIT':
            return state.map((student, idx)=>
            idx === action.index ? action.payload : student)
        case 'DELETE':
            return state.filter((_, idx)=> idx !== action.index )  ;
        default:
            return state;      

    }
}

export default studentReducer;