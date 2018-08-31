import React from 'react';

export default class Partida extends React.Component{
    render(){
        return (
            <div className="placarContainer__box">
                <h3 className="placarContainer__partida__title">{this.props.estadio}</h3>
                <div className="placarContainer__partida">
                    <p className="placarContainer__partida__info">{this.props.data}</p>
                    <p className="placarContainer__partida__info"> - </p>
                    <p className="placarContainer__partida__info">{this.props.hora}</p>
                </div>
            </div>
        );
    }
};