import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import axios from 'axios';
import Dolar from './assets/dolar.jpg';
import Reales from './assets/reales.jpg';
import Pesos from './assets/pesos.jpg';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cotizacion: []
    }
    
    this.callCotizacion = this.callCotizacion.bind(this);
  }


  componentDidMount () {
    this.callCotizacion();
    this.countdown = setInterval(this.callCotizacion, 10000);
  }
  
  componentWillUnmount () {
    clearInterval(this.countdown);
  }

  callCotizacion () {
    axios.get('https://www.bancoprovincia.com.ar/Principal/Dolar')
      .then(json => this.setState({ cotizacion: json.data }, () => console.log(this.state.cotizacion)))
  }

  render() {
    return (
      <div className="contenedor">
        <CardGroup>
         <Card>
            <CardImg top width="100%" src={Pesos} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={Dolar} alt="Card image cap" />
            <CardBody>
              <CardTitle>{this.state.cotizacion[0]}</CardTitle>
              <CardSubtitle>{this.state.cotizacion[1]}</CardSubtitle>
              <CardText>{this.countdown}</CardText>

              <Button>Button</Button>
            </CardBody>
          </Card> 
          <Card>
            <CardImg top width="100%" src={Reales} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
      </CardGroup>

     </div>
    );
  }

  // constructor(props){
  //   super(props);
  //   this.state = {currentCount: 0};
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // timer() {
  //   this.setState({
  //     currentCount: this.state.currentCount + 1
  //   })
  //   if(this.state.currentCount >= 10) { 
  //     this.state.currentCount = 0;
  //   }
  // }
  // componentDidMount() {
  //   this.intervalId = setInterval(this.timer.bind(this), 1000);
  // }
  // componentWillUnmount(){
  //   clearInterval(this.intervalId);
  // }

  // handleClick() {
  //   this.setState(state => ({currentCount: 0}));
  // }

  // render() {
  //   return(
  //     <div>
  //         <div>
  //           {this.state.currentCount}
  //         </div>
  //         <Button onClick={this.handleClick}>Actualizar</Button>
  //     </div>

  //   );
  // }
}

export default App;
