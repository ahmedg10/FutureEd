import React from 'react';
import { CollegeCard } from './CollegeCard.js';
import { Link } from 'react-router-dom';

export function SearchPage(props) {
    let handleAdd = (event) => {
        let templateList = [];
        props.collegeList.forEach(college => {
            if (college.name === event.target.value && !props.selectedColleges.includes(college.name)) {
                templateList.push(college);
            }
        });
        templateList = [...props.selectedColleges, templateList[0]];
        props.setSelectedColleges(templateList);
    }
    let collegeCards = props.college.map(college => {
        return (
            <div key={'search' + college.name} className="d-flex">
                <CollegeCard college={college} />
                <Link to="/yourCollege" className="d-flex">
                    <button value={college.name} className="btn btn-success center" onClick={handleAdd}>Add</button>
                    </Link>
            </div>
        )
    })
    let renderSearchTerm = (event) => {
        let input = event.target.value;
        props.findCollege(input);
    };

    return (
        <div>
            <h1>Search for Colleges!</h1>
            <div className="form-outline mb-4">
                <section className="search-bar-section">
                    <form className="search-bar">
                        <input type="text" placeholder="Search your interested college" className="search_bar" value={props.searchTerm} onChange={renderSearchTerm} />
                    </form>
                </section>
            </div>
            {collegeCards}
        </div>
    )
}