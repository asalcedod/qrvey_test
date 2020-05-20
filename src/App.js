import React, { Component } from "react";
import Header from "./Header";
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';
import getUrlCountries from './services/getUrlCountries';
import getContinentList from './services/getContinentsList'
import Continent from "./components/Continents/Continent";
import ProgressBar from "./components/ProgressBar"

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data:null,
          continents:null
      };
  };

  componentDidMount() {
      this.handleUpdateClick();
  }

  handleUpdateClick = () => {
      const api_country = getUrlCountries();
      fetch(api_country).then( resolve => {
          return resolve.json();
      }).then(data => {
          const newContinents = getContinentList(data);
          const newCountry = data;
          this.setState({
              data: newCountry,
              continents: newContinents
          })
      });
  }
  render () {
    const { data, continents } = this.state;
      return(
        <div className="App">
          <Header data = {data}></Header>
          <Grid>
            <Row>
              {continents ? continents.map((continent, index) => <Col xs={12} sm={2.4}><Continent continent = {continent} data = {data}/></Col>) : <ProgressBar color="black" colorBar="grey"></ProgressBar>}
            </Row>
          </Grid>
        </div>
      )
    }
}


export default App;
