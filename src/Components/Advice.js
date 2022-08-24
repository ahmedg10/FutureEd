import React from 'react'
import { Link } from 'react-router-dom'
import  { useParams } from 'react-router-dom'

export function Advice() {
  const [sentence, setSentence] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  let {id} = useParams();

  const url = `https://api.adviceslip.com/advice/` + id;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      setSentence(data.slip.advice);
    })
    .catch(err => {
      setErrorMessage("Error:" + err.message);
    });
  return (
    <div>
    <h1>{sentence}</h1>
    <p className="citeApi">Api from AdviceSlip by Tom Kiss</p>
    <p>{errorMessage}</p>
    <Link to="/about"><button className="btn btn-sm btn-primary m-2">Back</button></Link>
    </div>
  )
}