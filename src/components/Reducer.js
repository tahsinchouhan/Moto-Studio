export const reducer = (state, action) => {
    if(action.type === 'LOGIN_REQUEST'){
        return { 
            ...state,
            authenticating:true,
        }
    }

    if(action.type === 'LOGIN_SUCCESS'){
        return { 
            ...state,
            authenticating:false,
            user:action.payload?.user,
            isLogin: true
        }
    }

    if(action.type === 'LOGIN_FAILURE'){
        return { 
            ...state,
            authenticating:false,
            isLogin: false,
            error:action.payload
        }
    }

    if(action.type === 'USER_LOGOUT'){
        return { 
            ...state,
            user:null,
            item:[],
            authenticating:false,
            isLogin: false
        }
    }

    if(action.type === 'FETCH_REQUEST'){
        return {
            ...state,
            loading:true
        }
    }

    if(action.type === 'FETCH_FAILURE'){
        return {
            ...state,
            loading:false,
            error:action.payload
        }
    }

    if(action.type === 'GET_USER_DATA'){
        return {
            ...state,
            user:action.payload,
            loading:false,
            isLogin:true
        }
    }

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
            if(!state.isLogin) {
                return curElem.product._id !== action.payload
            }
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
              if(curElem.product._id === action.payload){
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
              if(curElem.product._id === action.payload && curElem.quantity > 1){
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