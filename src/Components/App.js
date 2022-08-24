import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { CompareChart } from './CompareChart.js'
import { Survey } from './Survey.js';
import { YourCollege } from './YourCollege.js';
import { About } from './About.js';
import { SearchPage } from './SearchPage';
import { set } from 'lodash';
import { Advice } from './Advice.js';



// The props should pass everything we need
// including the question data, the colleges information, and the selected colleges.
function App(props) {
  let collegeList = props.props.college;
  let questions = props.props.questions[0];
  let options = props.props.options;
  const [selectedColleges, setSelectedColleges] = useState([collegeList[0], collegeList[1], collegeList[2]]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false); 
  const [getTerm, setGetTerm] = useState("");

  let searchCallBack = (inputSearch) => {
    setGetTerm(inputSearch);
    const filteredCollege = collegeList.filter((college) => {
      if (inputSearch === "") {
        return college;
      } else {
        return Object.values(college).toString().toLowerCase().includes(inputSearch.toLowerCase())
      }
    })
    setSearchFilter(filteredCollege);
  }

  let handleDropdown = (event) => {
    setIsDropdown(!isDropdown);
  }

  // return multiple selected college cards
  return (
    <div>
    <main className="container-fluid">
      <header className="nav-list">
        <img className="logo" src="img/logo.png" alt="website logo" />
        <nav className="navbar nav-bar-light nav-list">
        <button type='button' className='mobile-menu btn btn-primary' onClick={handleDropdown}>Menu
          <div className= {isDropdown ? "dropdown-content": "d-none"}>
            <ul>
              <Link to="/about"><li className='links'>About</li></Link>
              <Link to="/survey"><li className='links'>Survey</li></Link>
              <Link to="/yourCollege"><li className='links'>Your College</li></Link>
              <Link to="/compareChart"><li className='links'>Compare Chart</li></Link>
              <Link to="/SearchPage"><li className="links">Search Page</li></Link>
            </ul>
          </div>
          </button>

          <div className='oversight-links'>
            <ul>
              <Link to="/about"><li className='links'>About</li></Link>
              <Link to="/survey"><li className='links'>Survey</li></Link>
              <Link to="/yourCollege"><li className='links'>Your College</li></Link>
              <Link to="/compareChart"><li className='links'>Compare Chart</li></Link>
              <Link to="/SearchPage"><li className="links">Search Page</li></Link>
            </ul>
          </div>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path=":id" element={<Advice />} />
          <Route path="survey" element={<Survey options={options} questions={questions} college={collegeList} selectedColleges={selectedColleges} setSelectedColleges={setSelectedColleges} />} />
          <Route path="yourCollege" element={<YourCollege selectedColleges={selectedColleges} setSelectedColleges={setSelectedColleges} />} />
          <Route path="compareChart" element={<CompareChart selectedColleges={selectedColleges} totalCollegeList={collegeList} />} />
          <Route path="*" element={<Navigate to="about" />} />
          <Route path="SearchPage" element={<SearchPage college={searchFilter} collegeList={collegeList}searchTerm={getTerm} findCollege={searchCallBack} selectedColleges={selectedColleges} setSelectedColleges={setSelectedColleges}/>} />
        </Routes>
      </div>
    </main>
    <footer>
    <div className="socials">
      <a href="#" /><img src={"./img/insta.png"} alt="Instagram logo" />
      <a href="#" /><img src={"./img/twitter.png"} alt="Twitter logo" />
      <a href="#" /><img src={"./img/linkedin.png"} alt="Linkedin logo" />
    </div>
    <ul>
      <li><a href="#">
          <p>About</p>
        </a></li>
      <li><a href="#">
          <p>Terms</p>
        </a></li>
      <li><a href="#">
          <p>Contact</p>
        </a></li>
    </ul>
    <p className="copyright">FurtureEd &copy; 2022</p>
  </footer>
  </div>
  );
}

export default App;