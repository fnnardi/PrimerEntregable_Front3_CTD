import React from 'react';
import data from './data';
import Opciones from './Opciones';
import Historial from './Historial';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historialOpciones: [],
      contador: 0,
      seleccionAnterior: '',
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contador !== this.state.contador) {
      this.state.historialOpciones.push(this.state.seleccionAnterior);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7) {
      alert('Fin.');
    } else if (id === 'A' && this.state.seleccionAnterior !== 'A') {
      this.setState({
        contador: this.state.contador + 1,
        seleccionAnterior: 'A',
      });
    } else if (id === 'A') {
      this.setState({
        contador: this.state.contador + 2,
      });
    } else if (id === 'B' && this.state.seleccionAnterior === 'A') {
      this.setState({
        contador: this.state.contador + 3,
        seleccionAnterior: 'B',
      });
    } else if (id === 'B') {
      this.setState({
        contador: this.state.contador + 2,
        seleccionAnterior: 'B',
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <Historial
          seleccionAnterior={this.state.seleccionAnterior}
          historialOpciones={this.state.historialOpciones.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.contador].id
          )}
        />
      </div>
    );
  }
}