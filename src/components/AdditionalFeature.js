import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export const AdditionalFeature = ({feature, buyItem}) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem({feature})}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(state=>state, actionCreators)(AdditionalFeature);
