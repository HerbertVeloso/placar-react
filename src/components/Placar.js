import React from 'react';

import BotaoGol from './BotaoGol'

export default class Placar extends React.Component{
    render (){
        return (
            <div className="placarContainer__box">
                <h1 className="placarContainer__box__team">{this.props.nome}</h1>
                <span className="placarContainer__box__goals">{this.props.gol}</span>
                <BotaoGol marcarGol={this.props.marcarGol} />
            </div>
        );
    }
};