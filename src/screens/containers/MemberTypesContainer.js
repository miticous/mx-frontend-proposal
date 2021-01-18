import React from 'react';
import { Creators } from '../../ducks/member';
import { useStateValue } from '../../store';
import MemberTypesComponent from '../components/MemberTypesComponent';

const MemberTypesContainer = () => {
  const [
    {
      Member: { members, isLoading }
    },
    dispatch
  ] = useStateValue();

  React.useEffect(() => {
    Creators.getMembers(dispatch);
  }, []);

  console.log(members);

  return (
    <div>
      <MemberTypesComponent data={members} isLoading={isLoading} />
    </div>
  );
};

export default MemberTypesContainer;
