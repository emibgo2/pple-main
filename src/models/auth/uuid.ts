const SET_UUID = 'auth/SET_UUID';
export const setUuid = (uuid: string) => ({
  type: SET_UUID,
  payloads: {
    uuid,
  },
});

type UuidAction = ReturnType<typeof setUuid>;

type UuidState = {
  uuid: string;
};

const initialState: UuidState = {
  uuid: '',
};

const uuid =(
    state: UuidState = initialState, 
    action: UuidAction,
): UuidState =>{
    switch (action.type){
        case SET_UUID:
        const uuid = action.payloads.uuid;
        return {
            ...initialState,
            uuid: uuid
        };

        default:
            return state;
    }
}

export default uuid; 