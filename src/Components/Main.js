import React, { useState } from 'react'
import './Main.css'
import Header from './Header'
import Search from './Search'
import Card from './Card'


export default function () {
    const [search, setSearch] = useState('')
    const [user, setUser] = useState('')
    const [fetched, setFetched] = useState(false)
    const [repos, setRepos] = useState('')
    return (
        <div className='container'>
            <Header />
            <Search setRepos={setRepos} setFetched={setFetched} setUser={setUser} setSearch={setSearch} search={search} />
            {fetched && <Card repos={repos} user={user} />}
        </div>
    )
}
