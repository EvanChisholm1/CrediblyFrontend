import React, { Component, useLayoutEffect, useState } from 'react';
import './Input.css';
import { json } from 'react-router';
// import loading from './loading.gif';

// class TextInput extends Component {
function TextInput() {
    const [inputUrl, setUrl] = useState('')
    const [res, setRes] = useState(null);
    const [isLoading, setLoading] = useState(false)

    function handleInputChange(event) {
        setUrl(event.target.value) // Update the input value in the component's state);
    };

    async function requestAPI(url) {
        setRes('')
        setLoading(true)
        const req = await fetch(`http://localhost:8080/?url=${url}`)
        const response = await req.json()
        setLoading(false)
        setRes(response)
    }

//   render() {
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(inputUrl)
                requestAPI(inputUrl)
            }}
                className='urlForm'
            >
                <label htmlFor="text-input" className="label">Enter URL: </label> <br />
                <div>
                    <input
                        type='url'
                        className="input-field"
                        id="text-input"
                        value={inputUrl}
                        onChange={handleInputChange}
                        placeholder="https://www.example.com"
                    //   rows={3} // Specify the initial number of rows (adjust as needed)
                    />
                    <button type="submit"> 
                        <p>submit</p>
                    </button>
                </div>
            </form>
            {isLoading ? <p>loading...</p> : ""}
            {res ? <div className='output'>
                <h2>Facuality: </h2><div>{res.factualness}</div>
                <h2>Bias: </h2><div>{res.textBias}</div>
                <h2>Clickbait:</h2><div>{res.clickbaitAnalysis}</div>
                {/* <li>{JSON.stringify(res)}</li> */}
                {res.crossRef && <div>{res.crossRef}</div>}
            </div> : ""}
        </>
    );
}

export default TextInput;
