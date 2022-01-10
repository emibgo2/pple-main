const SET_TOKEN = 'auth/SET_TOKEN'; 
export const setToken = (token: any) => ({
  type: SET_TOKEN,
  payloads: {
    token,
  },
});


type TokenAction = 
|ReturnType<typeof setToken>;

type TokenState = {
    token : string; 
}; 

const initialState: TokenState = {
    token: '',
}; 
 
const tokens = (
  state: TokenState = initialState,
  action: TokenAction,
): TokenState => {
    
    switch (action.type) {
      case SET_TOKEN:
        const token = action.payloads.token;
        return { 
            ...initialState, 
            token: token 
        };
    
      default:
        return state;
    }
};

export default tokens;