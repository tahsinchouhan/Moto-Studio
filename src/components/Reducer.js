export const reducer = (state, action) => {
  
    if(action.type === 'USER_SIGNIN'){
        return {
            ...state,
            user:action.payload,
            isLogin: true
        }
    }

  if(action.type === 'GET_ALL'){
      return {
          ...state,
          item:action.payload
      }
  }

  if(action.type === 'ADD_TO_CART'){ 
    return {
        ...state,
        item:action.payload
    }
  }

  if(action.type === 'REMOVE_ITEM'){ 
    return {
        ...state,
        item:state.item.filter((curElem)=>{
            return curElem._id !== action.payload
        })
    }
  }

  if(action.type === 'CLEAR_CART'){ 
    return {
        ...state,
        item:[]
    }
  }

  if(action.type === 'INCREAMENT_ITEM'){
      return {
          ...state,
          item:state.item.map((curElem)=>{
              if(curElem._id === action.payload){
                  return {...curElem, quantity:curElem.quantity+1}
              }            
              return curElem
          })
      }
  }

  if(action.type === 'DECREAMENT_ITEM'){
      return {
          ...state,
          item:state.item.map((curElem)=>{
              if(curElem._id === action.payload && curElem.quantity > 1){
                  return {...curElem, quantity:curElem.quantity-1}
              }            
              return curElem
          })
      }
  }

  if(action.type === 'TOTAL_QTY'){
      if(state.item.length === 0) return {...state,totalItem:0,totalAmount:0}
      
      let {totalItem, totalAmount} = state.item.reduce( (accum, curVal) => {
          let { price, quantity } = curVal
          accum.totalItem += quantity
          accum.totalAmount += Number(price || 0)*Number(quantity || 0)
          return accum
      }, { totalItem: 0, totalAmount:0 })
      return {
          ...state,
          totalItem,
          totalAmount
      }
  }
  return state
}