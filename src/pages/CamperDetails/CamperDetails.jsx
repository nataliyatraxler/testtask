import React from 'react';
import { useParams } from 'react-router-dom';

const CamperDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Camper Details for ID: {id}</h1>
      <p>Here you can add more details about the selected camper.</p>
    </div>
  );
};

export default CamperDetails;
