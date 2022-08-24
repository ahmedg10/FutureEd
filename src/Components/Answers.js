import React from 'react'

export default AnswerOption = (props) => {
    return(
        <div>
            <button className='btn btn-light btn-sm'>
                {props.answer}
            </button>
        </div>
    )
}