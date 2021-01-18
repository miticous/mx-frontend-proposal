import React from 'react';
import { Creators } from '../../ducks/member';
import { useStateValue } from '../../store';
import MembersComponent from '../components/MembersComponent';

const MembersContainer = () => {
  const [
    {
      Member: { members, isLoading }
    },
    dispatch
  ] = useStateValue();

  React.useEffect(() => {
    Creators.getMembers(dispatch);
  }, []);

  return (
    <div>
      <MembersComponent data={members} isLoading={isLoading} />
    </div>
  );
};

export default MembersContainer;
