import React from 'react'
import './Search.css'
import imgsearch from '../assets/icon-search.svg'

export default function Search(props) {
    async function click() {
        await fetch(`https://api.github.com/users/${props.search}/repos`).then((response) => response.json()).then((json) => {
            props.setRepos(json.length)
        })
        fetch(`https://api.github.com/users/${props.search}`).then((response) => response.json()).then((json) => {
            props.setUser(json)
            props.setFetched(true)
        })
    }
    return (
        <>
            <div id='search'>
                <div className="left">
                    <label htmlFor="searchinp" className='div'>
                        <img className='imgsearch' src={imgsearch} alt="img1" />
                    </label>
                    <input className='searchcard' value={props.search} onChange={(event) => props.setSearch(event.target.value)} placeholder='Search GitHub username…' type="text" id='searchinp' />
                </div>

                <button onClick={click} className='bluebox'>Search</button>
            </div>
        </>
    )
}
