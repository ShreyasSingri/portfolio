import React, { Component } from 'react';
import data from './../PersonalData.json';
import './index.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.in = 0;
    }

    render() {
        return <div className='head'>
            <p className='name'>{data.Name}</p>
            <div className='menu'>
                {data.HeaderMenu.map((header) => {
                    return (
                        <div style={{ cursor: 'pointer', color: header.value === this.props.page ? "gold" : "" }} onClick={() => { this.props.setPage(header.value) }}>{header.label}</div>
                    );
                })}</div>
            <div className='dropMenu'>
                <select value={this.in} onChange={(event) => {
                    this.in = event.target.value;
                    this.props.setPage(data.HeaderMenu[event.target.value].value)
                }}>
                    {data.HeaderMenu.map((header, ind) => {
                        return <option value={ind}>{header.label}</option>
                    })}
                </select>
            </div>
        </div>
    }
}
