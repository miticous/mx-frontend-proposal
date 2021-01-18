export const Types = {
  IS_LOADING: 'member/IS_LOADING',
  MEMBER: 'member/MEMBER',
  CLEAR: 'member/CLEAR'
};

export const INITIAL_STATE = {
  isLoading: false,
  member: {}
};

export default ({ type, payload }, state = INITIAL_STATE) => {
  switch (type) {
    case Types.IS_LOADING:
      return { ...state, isLoading: payload };
    case Types.MEMBER:
      return { ...state, member: payload };
    case Types.CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const Creators = {
  setIsLoading: isLoading => ({
    type: Types.IS_LOADING,
    payload: isLoading
  }),
  setMember: member => ({
    type: Types.MEMBER,
    payload: member
  }),
  clear: () => ({
    type: Types.CLEAR
  }),
  getMember: async () => {}
};
