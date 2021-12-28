const initialState={
    custom:[]
  }
  

const costumReducer=(state=initialState,action)=>{
    switch(action.type){
      case "ADD_COSTUMER":
  
      return {...state, custom:[...state.custom, action .payload ]}
  
      case "REMOVE_COSTUMER":
  
        return {...state,custom:state.custom.filter(f=>f.id!==action.payload)}
  
    default:
    return state}
  
  }
  
export default costumReducer  