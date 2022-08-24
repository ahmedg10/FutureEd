import React from 'react';
import { CollegeCard } from './CollegeCard';

export function YourCollege(props) {
  let handleRemove = (event) => {
    let templateList = [];
    props.selectedColleges.forEach(college => {
      if (college.name !== event.target.value) {
        templateList.push(college);
      }
    });
    props.setSelectedColleges([...templateList]);
  }

  return (
    <div>
      <h1 className="text-center">Your College List</h1>
      <div>
        {props.selectedColleges.map(college => {
          return (
            <div key={college.name} className="d-flex">
            <CollegeCard  college={college} />
            <button value={college.name} className="btn btn-danger center" onClick={handleRemove}>Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
