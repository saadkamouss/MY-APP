import React from 'react';
import { useParams } from 'react-router-dom';
export default function ProfilePages() {
  const params = useParams();
  return (
    <div>
      <h1>Profile page {params.profileId} </h1>
    </div>
  );
}
