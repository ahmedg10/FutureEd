import React from 'react';

export function SurveyQuestion(props) {
    let questionList = [];
    for (let i = 0; i < Object.keys(props.questions).length; i++) {
        let question = props.questions[i];
        let idName = "Q" + (i + 1);
        questionList.push(<label id={idName} htmlFor={idName} key={idName}>{question}</label>);
        questionList.push(<RenderOptions key={i} idName={idName} options={props.options[i]} answers={props.answers} setAnswers={props.setAnswers} index={i} />);
    }
    return questionList;
}

function RenderOptions(props) {
    const handleSelect = (event) => {

        props.answers[props.index] = event.target.value;
        props.setAnswers(props.answers);
    };

    return (
        <div className="col-auto">
            <select id={props.idName} className='d-inline-flex p-1' onChange={handleSelect}>
                <option value="0">Select</option>
                <EachOption options={props.options} />
            </select>
        </div>
    )
}

function EachOption(props) {
    let optionList = [];

    for (let i = 0; i < Object.keys(props.options).length; i++) {
        const eachOption = props.options[i];
        let value = i + 1;
        optionList.push(<option key={i} value={value}>{eachOption}</option>)
    }
    return optionList;
}