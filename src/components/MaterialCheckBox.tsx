import '@material/web/all';
import React from 'react';

const MaterialCheckBox: React.FC<{ label: string }> = ({ label }) => {
  return (
    <label className="flex items-center text-gray-600">
      {/* eslint-disable-line react/no-unknown-property */}
      <md-checkbox touch-target="wrapper"></md-checkbox> 
      {/* eslint-enable react/no-unknown-property */}

      {label}
    </label>
  );
};

export default MaterialCheckBox;
