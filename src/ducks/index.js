import MemberReducer, { INITIAL_STATE as MemberInitialState } from './member';

export const mainReducer = ({ Member }, action) => ({
  Member: MemberReducer(action, Member)
});

export const mainInitialStates = {
  Member: MemberInitialState
};
