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

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
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
  // handleSubmit(index, event) {
  //   const u = this.state.url

  //   alert(u)
  //   event.preventDefault()
  // }
  // componentDidCatch(error, info) {
  //   alert(error)
  // }

takeScreenshot = (url) => {
  }

  handleSubmit = (event) => {
   // const { email, password } = this.state


    event.preventDefault()
  }

  render() {
    const { url, description } = this.state
    const isInvalid =
      url === ''

    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-7 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
              </div>
            </div>
            <div className="col-lg-5 my-auto">

              <form onSubmit={this.handleSubmit}>
              <div className="form-group">
              <label htmlFor="description" className="sr-only">Descrição</label>
              <textarea className="form-control" id="description" value={description} rows="12" placeholder="Descrição" onChange={event => this.setState({ description: event.target.value })}></textarea>
            </div>

                <div className="form-group">
                  <label htmlFor="url" className="sr-only">url</label>
                  <input type="text" className="form-control" id="url" value={url} placeholder="url" onChange={event => this.setState({ url: event.target.value })} />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block" disabled={isInvalid}>Entrar</button>
                </div>
              </form>
{
              // <div className="device-container">
              //   <div className="device-mockup iphone6_plus portrait white">
              //     <div className="device">
              //       <div className="screen">
              //         { /* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
              //         <img src="img/demo-screen-1.jpg" className="img-fluid" alt="" />
              //       </div>
              //       <div className="button">
              //         { /* You can hook the "home button" to some JavaScript events or just remove it */}
              //       </div>
              //     </div>
              //   </div>
              // </div>


    }
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
