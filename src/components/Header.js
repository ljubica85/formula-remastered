import React from 'react'
import "../index.css";
import Home from '../img/home.png'


export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='header'><button><img className='small' src={Home} alt='Home image' />Home</button></div>
        )
    }
}