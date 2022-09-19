import React, { Component } from 'react';
import data from './../PersonalData.json';
import './index.css';

export default class Footer extends Component {

    render() {
        return <div className='foot'>
            <p className='name'>Developed on React</p>
            <div className='menu'>
                {data.SocialMedia.map((header, ind) => {
                    return (<a href={header.link} target={'_blank'} rel="noreferrer nofollow"><img height={'32px'} src={require('./../Assets/'.concat(header.icon))} alt={header.label} />
                    </a>);
                })}</div>
        </div>
    }
}
