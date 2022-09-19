import React, { Component } from 'react';
import data from './../PersonalData.json';
import './index.css';

export default class Header extends Component {

    render() {
        return <div  className='head'>
            <p className='name'>{data.Name}</p>
            <div className='menu'>
                {data.HeaderMenu.map((header, ind) => {
                    return (
                        <div style={{cursor:'pointer', color: header.value === this.props.page? "gold": ""}} onClick={() => {this.props.setPage(header.value)}}>{header.label}</div>
                    );
                })}</div>
        </div>
    }
}
