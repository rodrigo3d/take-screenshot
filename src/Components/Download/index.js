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

class Download extends React.Component {

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
      <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">Discover what all the buzz is about!</h2>
            <p>Our app is available on any mobile device! Download now to get started!</p>
            <div className="badges">
              <a className="badge-link" href="#"><img src="img/google-play-badge.svg" alt="" /></a>
              <a className="badge-link" href="#"><img src="img/app-store-badge.svg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

export default Download
