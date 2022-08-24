import React, { useState } from 'react';
import { Results } from './Results.js';
import { SurveyQuestion } from './SurveyQuestion.js';

export function Survey(props) {
    return (
        <EachQuestion options={props.options} questions={props.questions} college={props.college} setSelectedColleges={props.setSelectedColleges} selectedColleges={props.selectedColleges} />
    );
}

function EachQuestion(props) {
    let [answers, setAnswers] = useState([0,0,0,0,0,0,0]);


    let [totalScore, setTotalScore] = useState(0);

    const handleSum = () => {
        let num = 0;
        for (let i = 0; i < answers.length; i++) {
            num = num + parseInt(answers[i]);
        }
        totalScore = num;

        setTotalScore(totalScore);
    };

    return (
        <div className="survey">
            <div className="form-select">
                <h1  className="title">Finding Your Best Fit Colleges!</h1>
                <p className="description">
                    This is our survey that will help you decide what colleges will best fit your needs to achieve your dreams. College is an important moment in your life. However, what is more important, is ensuring you are at a University that equips you with the necessary tools to succeed.
                    <em> Disclaimer we will ask personal questions regarding your location, financial needs, and career aspiration. If you don't want to share this information please feel free not to take the survey.</em>
                </p>
                <SurveyQuestion questions={props.questions} options={props.options} answers={answers} setAnswers={setAnswers} />
            </div>
            <div className="col-auto">
                <button id="saveButton" type="submit" className="btn btn-sm btn-primary m-2" onClick={handleSum}>Submit</button>
                <p><em>Make sure you submit your form.</em></p>
            </div>
            <div>
                <Results college={props.college} score={totalScore.toString()} setSelectedColleges={props.setSelectedColleges} selectedColleges={props.selectedColleges} />
            </div>
        </div>
    );
}