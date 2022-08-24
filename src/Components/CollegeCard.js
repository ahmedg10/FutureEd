import React from 'react';

// The props should pass the data of one college.
export function CollegeCard(props) {
  let college = props.college;
  return (
    <div className="d-flex info-cards border border-3">
      <div className="d-flex p-2 justify-content-center">
        <h1>{college.name}</h1>
      </div>
      <img className="university-icon" src={college.img} alt={college.name} />
      <table className="table table-hover table-bordered justify-content-center">
        <thead>
          <tr>
            <th>School type</th>
            <th>State</th>
            <th>In-state tuition fee</th>
            <th>Out state tuition fee</th>
            <th>Tuition wavier info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{college.type}</td>
            <td>{college.state}</td>
            <td>{college.inStateTuition}</td>
            <td>{college.outStateTuition}</td>
            <td><a href={college.link}>To see more</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}