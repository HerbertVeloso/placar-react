import React from 'react';

import Placar from './Placar';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            golsCasa: 0,
            golsVisitante: 0,
        }
    }

    marcarGolCasa(){
        this.setState = ({
            golsCasa: this.state.golsCasa + 1,
        });
    };

    marcarGolVisitante(){
        this.setState = ({
            golsVisitante: this.state.golsVisitante + 1,
        });
    };

    render(){
        return (
            <main className="placarContainer">
                <section className="placarContainer__box">
                    <h2 className="placarContainer__box__title">Casa</h2>
                    <Placar nome={this.props.casa.nome} gol={this.state.golsCasa} marcarGol={this.marcarGolCasa.bind(this)} />
                </section>
                <Partida estadio={this.props.partida.estadio} data={this.props.partida.data} hora={this.props.partida.hora} />
                <section className="placarContainer__box">
                    <h2 className="placarContainer__box__title">Visitante</h2>
                    <Placar nome={this.props.visitante.nome} gol={this.state.golsVisitante} marcarGol={this.marcarGolVisitante.bind(this)} />
                </section>
            </main>
        );
    }
}