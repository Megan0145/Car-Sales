import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export const AddedFeature = ({feature, removeItem}) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeItem(feature)}>X</button>
      {feature.name}
    </li>
  );
};

export default connect(state=>state, actionCreators)(AddedFeature);
