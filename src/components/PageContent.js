import React, { Component } from 'react';
import data from './../PersonalData.json';
import './index.css';

export default class PageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
    }

    titleCard(data) {
        return <div className='card' style={{ cursor: data.url || data.description ? 'pointer' : '', backgroundColor: data.highlight ? "rgba(0,139,139,0.8)" : "" }}>
            <p>{data.name && data.name}</p>
            {data.icon && <img alt='logo' src={require('./../Assets/'.concat(this.props.page, '/', data.icon))} className='logo' height='50px' />}
        </div>
    }

    detailCard(data) {
        return <div className='detailCard'>
            {data.name && <h6 className='detailName'>{data.name}</h6>}
            <p>{data.description}</p>
            {data.url && <a href={data.url.substring(0, 4) === 'http' ? data.url : require('./../Assets/'.concat(this.props.page, '/', data.url))} target='_blank' rel="noreferrer"><button>VIEW</button></a>}
        </div>
    }

    render() {
        const pageData = data.Pages[this.props.page];
        if (pageData.type === "Info") {
            return <div className='info'>
                {pageData.title && <h2>{pageData.title}</h2>}
                {pageData.subtitle && <h4>{pageData.subtitle}</h4>}
                {pageData.download && <a href={require('./../Assets/'.concat(this.props.page, '/', pageData.download.fileName))} download={pageData.download.fileName}><button>{pageData.download.buttonName}</button></a>}
                {pageData.table && <table>
                    {pageData.table.map(data => { return <tr>{data.map(entry => { return <td>{entry.charAt(0) === '“' ? <div className='quote'>{entry}</div> : entry}</td> })}</tr> })}
                </table>}
            </div>
        }
        return <div className='cardBody'>
            {pageData.cards.map((data) => {
                if (data.url && !data.description) {
                    return <a href={data.url.substring(0, 4) === 'http' ? data.url : require('./../Assets/'.concat(this.props.page, '/', data.url))} target='_blank' rel="noreferrer">{this.titleCard(data)}</a>
                }
                if (data.description) {
                    if (this.state.selected === data.name) {
                        return <div onClick={() => { this.setState({ selected: '' }) }}>{this.detailCard(data)}</div>
                    }
                    return <div onClick={() => { this.setState({ selected: data.name }) }}>{this.titleCard(data)}</div>
                }
                return this.titleCard(data);
            })}

        </div>
    }
}
