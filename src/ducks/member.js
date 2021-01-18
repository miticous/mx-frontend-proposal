import api from '../services/api';

export const Types = {
  IS_LOADING: 'member/IS_LOADING',
  MEMBERS: 'member/MEMBERS',
  CLEAR: 'member/CLEAR'
};

export const INITIAL_STATE = {
  isLoading: true,
  members: {}
};

export default ({ type, payload }, state = INITIAL_STATE) => {
  switch (type) {
    case Types.IS_LOADING:
      return { ...state, isLoading: payload };
    case Types.MEMBERS:
      return { ...state, members: payload };
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
  setMembers: members => ({
    type: Types.MEMBERS,
    payload: members
  }),
  clear: () => ({
    type: Types.CLEAR
  }),
  getMembers: async dispatch => {
    try {
      dispatch(Creators.setIsLoading(true));

      const { data } = await api.get('/member-types');
      console.log(data);
      dispatch(Creators.setMembers(data));
      dispatch(Creators.setIsLoading(false));
      return false;
    } catch (error) {
      return false;
    }
  }
};
