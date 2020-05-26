const defaultState = {
    load:false,
    user: '',
    email: '',
    error: false
  }
    
  const user = (state = defaultState, action) => {
    switch (action.type) {
      case 'GET_USER':
        return {
          ...state,
          load:true,
          user: action.data,
          email: action.data.email
        };
      case 'LOGOUT':
        return {
          ...state,
          load:true,
          user: '',
          email: ''
        };
      case 'LOGIN':
        return {
          ...state,
          error: action.data
        };  
      default:
        return state
    }
  }
    
    export default user;
    