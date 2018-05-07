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

class Contact extends React.Component {

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
      <section className="contact bg-primary" id="contact">
        <div className="container">
          <h2>We
        <i className="fa fa-heart"></i>
            new friends!</h2>
          <ul className="list-inline list-social">
            <li className="list-inline-item social-twitter">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item social-facebook">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item social-google-plus">
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Contact
