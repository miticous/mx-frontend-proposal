import React from 'react';
import { Creators } from '../../ducks/member';
import { useStateValue } from '../../store';
import MemberTypesComponent from '../components/MemberTypesComponent';

const MemberTypesContainer = () => {
  const [
    {
      Member: { memberTypes, isLoading }
    },
    dispatch
  ] = useStateValue();

  React.useEffect(() => {
    Creators.getMemberTypes(dispatch);
  }, []);

  return (
    <div>
      <MemberTypesComponent data={memberTypes} isLoading={isLoading} />
    </div>
  );
};

export default MemberTypesContainer;
