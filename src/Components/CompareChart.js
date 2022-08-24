import React from 'react';
import Chart from 'react-google-charts';

// The props should pass the data of a list of selected colleges.
export function CompareChart(props) {

  let selectedColleges = props.selectedColleges;
  let totalCollegeList = props.totalCollegeList;
  let totalCollegeNameList = [];
  totalCollegeList.forEach(college => {
    totalCollegeNameList.push(college.name);
  });

  let collegeNames = [];
  let inStateTuititions = [];
  let outStateTuititions = [];

  selectedColleges.forEach(college => {
    if (totalCollegeNameList.includes(college.name)) {
      collegeNames.push(college.name);
      inStateTuititions.push(college.inStateTuition);
      outStateTuititions.push(college.outStateTuition);
    }})

  let HistogramData = [
    ["Name of Colleges", "In-State-Tuitition", "Out-State-Tuitition"]
  ]
  for (let i = 0; i < selectedColleges.length; i++) {
    HistogramData.push([collegeNames[i], inStateTuititions[i], outStateTuititions[i]]);
  }
  const chartOptions = {
    title: 'Comparing the tuition',
    colors: ['#5C3292', '#1A8763', '#871B47', '#999999'],
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Compare Tuition Fee</h1>
      <Chart
        width='100%'
        height='400px'
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={HistogramData}
        options={chartOptions}
      />
    </div>
  )
}
