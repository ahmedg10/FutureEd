import React from 'react';
import { CollegeCard } from './CollegeCard';
import { Link } from 'react-router-dom';

export function Results(props) {

  let resultCollege = props.college;
  let collegeNameList = [];
  props.selectedColleges.forEach(college => {
    collegeNameList.push(college.name);
  });

  let handleAddSelectedCollege = (event) => {
    let templateList = [];
    resultCollege.forEach(college => {
      if (college.name === event.target.value && !collegeNameList.includes(college.name)) {
        templateList.push(college);
      }
    });
    if (templateList.length > 0) {
      props.setSelectedColleges([...props.selectedColleges, templateList[0]]);
    }
  }

  return (resultCollege.map(college => {
    if (college.score === props.score) {
      return (
        <div key={college}>
          <CollegeCard college={college} />
          <Link to="/yourCollege"><button className="btn btn-sm btn-primary m-2" value={college.name} onClick={handleAddSelectedCollege} >
            Add to My College
          </button>
          </Link>
        </div>
      );
    }
    else {
      return null;
    }
  }
  ))
}
