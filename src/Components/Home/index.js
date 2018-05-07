/**
 * RODRIGO3D.COM
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://rodrigo3d.com
 * @see https://github.com/rodrigo3d/rodrigo3d.com/tree/strata
 */

import React from 'react';
import { Link } from 'react-router-dom';
//import data from './dados.json';
//import axios from 'axios';


import Footer from '../Partials/footer';

import Navigation from '../Navigation';
import Header from '../Header';

import Download from '../Download';
import Features from '../Features';
import Cta from '../Cta';
import Contact from '../Contact';

// import About from '../About';
// import Projects from '../Projects';
// import Contact from '../Contact';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      social: {},
      isLoading: false
    }
  }


  componentWillMount() {

  }


  componentDidMount() {

    // const url = "https://rodrigo3d.github.io/database.html"
    // axios.get(url)
    //   .then(data => {
    //     this.setState({
    //       email: data.data.email,
    //       social: data.data.social,
    //       isLoading: false
    //     })
    //   }).catch(error => {
    //     console.log(error)
    //   })
  }


  componentWillUnmount() {
    //base.removeBinding(this.ref)
  }


  componentDidCatch(error, info) {
    alert(error)
  }


  render() {
    return (
      <main role="main">

        {
          // <Navigation />
        }
        {
          <Header />
        }
        {
          // <Download />
        }
        {
          // <Features />
        }
        {
          // <Cta />
        }
        {
          <Contact />
        }
        {
          // <Footer />
        }
      </main>
    );
  }
}

export default HomePage;
