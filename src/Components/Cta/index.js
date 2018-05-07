/**
 * RODRIGO3D.COM
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://rodrigo3d.com
 * @see https://github.com/rodrigo3d/rodrigo3d.com/tree/strata
 */

import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class Cta extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // database: "https://rodrigo3d.github.io/database.html",
      // email: '',
      // social: {},
      isLoading: false
    }
  }

  componentDidMount() {
    // this.setState({ isLoading: true })
    // axios.get(this.state.database)
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

  componentDidCatch(error, info) {
    alert(error)
  }

  render() {
    return (
      <section className="cta">
        <div className="cta-content">
          <div className="container">
            <h2>Stop waiting.<br />Start building.</h2>
            <a href="#contact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    )
  }
}

export default Cta
