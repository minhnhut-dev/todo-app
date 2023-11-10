import { MDBInput } from 'mdb-react-ui-kit';
import React from 'react';

function FilterTask({ onFilterTask }) {
  const handleFilterTask = (e) => {
    const { value } = e.target;
    onFilterTask(value);
  }
  return (
    <>
      <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
        <p className="small mb-0 me-2 text-muted">Filter</p>
        <MDBInput
          type="text"
          placeholder="Enter the task"
          onChange={(e) => handleFilterTask(e)}
        />
      </div>
    </>
  );
}

export default FilterTask;