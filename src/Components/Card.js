import React from 'react'
import './Card.css'
import iconlocation from '../assets/icon-location.svg'
import iconweb from '../assets/icon-website.svg'
import icontwitter from '../assets/icon-twitter.svg'

import iconcomp from '../assets/icon-company.svg'
import userEvent from '@testing-library/user-event'


export default function Card(props) {
    // console.log(props.user.created_at.slice(0, 4))
    let year = props.user.created_at.slice(0, 4);
    let day = props.user.created_at.slice(8, 10);
    let month;
    switch (props.user.created_at.slice(5, 7)) {
        case '01':
            month = 'Jan'
            break;
        case '02':
            month = 'Feb'
            break;
        case '03':
            month = 'Mar'
            break;
        case '04':
            month = 'Apr'
            break;
        case '05':
            month = 'May'
            break;
        case '06':
            month = 'Jun'
            break;
        case '07':
            month = 'Jul'
            break;
        case '08':
            month = 'Aug'
            break;
        case '09':
            month = 'Sep'
            break;
        case '10':
            month = 'Oct'
            break;

        case '11':
            month = 'Nov'
            break;
        case '12':
            month = 'Dec'
            break;
    }
    function bio() {
        if (props.user.bio === null) {
            return 'This profile has no bio'
        }
        else if (props.user.bio !== null) {
            return props.user.bio
        }
    }
    function location() {
        if (props.user.location === null) {
            return 'Not Available'
        }
        else if (props.user.location !== null) {
            return props.user.location
        }
    }
    function blog() {
        if (props.user.blog === "") {
            return 'Not Available'
        }
        else if (props.user.location !== null) {
            return props.user.blog
        }
    }
    function company() {
        if (props.user.company === null) {
            return 'Not Available'
        }
        else if (props.user.company !== null) {
            return props.user.company
        }
    }
    function name() {
        if (props.user.name === null) {
            return props.user.login
        }
        else if (props.user.name !== null) {
            return props.user.name
        }
    }
    return (
        <>

            <div className='card2'>


                <img className='imgspace' src={props.user.avatar_url} alt='Avatar' />
                <div className="card3">
                    <div className='firsline'>
                        <span className='username'>{name()}</span>
                        <div className='join'>
                            <span className='joined'>Joined {day} {month} {year} </span>
                        </div>
                    </div>
                    <span className='name'>@{props.user.login}</span>
                    <p className='text'>{bio()}</p>
                    <div className='info'>
                        <div className='repos'>
                            <span className='reposinfo t'>Repos</span>
                            <span className='reposinfo2 t1'>{props.repos}</span>
                        </div>
                        <div className='followers'>
                            <span className='followersinfo t'>Followers</span>
                            <span className='followersinfo2 t1 '>{props.user.followers}</span>
                        </div>
                        <div className='following'>
                            <span className='followinginfo t' >following</span>
                            <span className='followinginfo2 t1'>{props.user.following}</span>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div>
                            <div className='bot1'>
                                <img src={iconlocation} alt="" />
                                <span className='locainfo'>{location()}</span>

                            </div>
                            <div className='bot1 bot2'>
                                <img src={iconweb} alt="" />
                                <span className='locainfo'>{blog()}</span>

                            </div>
                        </div>
                        <div>
                            <div className='bot1 '>
                                <img src={icontwitter} alt="" />
                                <span className='locainfo'>Not Available</span>

                            </div>
                            <div className='bot1 bot2'>
                                <img src={iconcomp} alt="" />
                                <span className='locainfo'>{company()}</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
