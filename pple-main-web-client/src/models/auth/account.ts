const SET_UUID = 'auth/SET_UUID' as const;
const SET_TOKEN = 'auth/SET_TOKEN' as const;

export const setUuid = (uuid: string) => ({
  type: SET_UUID,
  uuid,
});

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  token,
});

type AccountAction = ReturnType<typeof setUuid> | ReturnType<typeof setToken>;
type AccountState = {
  uuid: string;
  token: string | undefined;
};

const initialState: AccountState = {
  uuid: '',
  token: 'aa',
};

const account = (
  state: AccountState = initialState,
  action: AccountAction,
): AccountState => {
  switch (action.type) {
    case SET_UUID:
      return {
        ...initialState,
        uuid: action.uuid,
      };

    case SET_TOKEN:
      return {
        ...initialState,
        token: action.token,
      };
    default:
      return state;
  }
};

export default account;
