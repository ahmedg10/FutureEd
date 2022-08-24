import React from 'react'
import { Link } from 'react-router-dom';

export function About() {
  // Those advice are random, but have IDs, fetch them by their Id
  // Picked some of them that sounds meaningful.
  return (
    <div className="aboutPage">
      <h1>About the site</h1>
      <p className="intro">This page will help you choose your ideal college based on your preferences. Once you enter, we will take you through a survey that will automatically generate a college that you can add to your list, then  to view it on "Your College" in the upper right corner. There are three defalut universities in the list, you may remove as you wish. You can click on "Compare Charts" to visually compare the tuitions fee of universities.</p>

      <p>Get some advice for your life before you go to college </p>
      <ul>
        <li><Link to="/2">First Advice</Link></li>
        <li><Link to="/5">Second Advice</Link></li>
        <li><Link to="/7">Third Advice</Link></li>
      </ul>
      <div className="d-flex align-items-center justify-content-center">
        <Link to="/survey"><button className="btn btn-sm btn-primary m-2">Enter</button></Link>
      </div>
    </div>);
}

