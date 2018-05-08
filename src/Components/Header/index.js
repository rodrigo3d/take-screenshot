/**
 * RODRIGO3D.COM
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://rodrigo3d.com
 * @see https://github.com/rodrigo3d/rodrigo3d.com/tree/strata
 */

import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ImageLoader from 'react-imageloader';
class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      url: '',
      server_status: false,
      screenshot: 'http://localhost:3001/?url=http://blank-page.rodrigo3d.com',
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  //  this.preloader = this.preloader.bind(this);
  }

  componentWillMount() {
    // this.setState({ isLoading: true })
    // axios.get("https://via.placeholder.com/300x200/FFFFFF/000000/?text=https://rodrigo3d.com")
    fetch("http://localhost:3001/?url=https://terra.com")
      .then(() => {
        alert(1)
        this.setState({
          isLoading: false
        })
      }).catch(error => {
      //  alert(error)
      })


    // fetch('http://via.placeholder.com/')
    // .then(function (response) {
    //   alert(response);
    // })
    // .catch(function (error) {
    //   alert(error);
    // });
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

  preloader(e) {
    return <img src="/assets/img/screenshot.png" />;
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ isLoading: true });
    const { url } = this.state;

    this.setState({
      screenshot: `http://localhost:3001/?url=${url}`,
   //   isLoading: false
    });

    // const img = document.getElementById("screenshot")
    // img.src = "https://via.placeholder.com/300x200/000000/FFFFFF/?text=ffasfasf"

    // axios.get(this.state.database)
    //   .then(data => {
    //     this.setState({
    //       avatar: data.data.avatar,
    //       email: data.data.email,
    //       isLoading: false
    //     })
    //   }).catch(error => {
    //     console.log(error)
    //   })
    event.preventDefault();
   // this.setState({ isLoading: false });

  }
  componentWillUnmount() {
    this.setState({ isLoading: false });
  }

  componentDidCatch(error, info) {
    alert(error);
  }

  render() {
    const { url } = this.state;
    const isInvalid =
      url === '';

    return (
      <header className="masthead">

        <div className="container h-100">


          <div className="row h-100">
            <div className="col-lg-6 my-auto">
              <div className="header-content mx-auto">
                <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                &nbsp;
                {
                  this.state.server_status &&

                  <a href="#download" className="btn btn-primary btn-xl js-scroll-trigger">Start</a>

                }
              </div>
            </div>
            <div className="col-lg-6 my-auto">
              <form onSubmit={this.handleSubmit}>
                {
                  this.state.isLoading
                    ?
                    <div className="form-group">
                      <label htmlFor="description" className="sr-only">Screenshot</label>
                      <div id="screenshot-load" className="rounded mx-auto- d-block- bg-white text-center text-secondary font-weight-bold">
                        <i className="fa fa-circle-o-notch fa-spin fa-4x" aria-hidden="true"></i>
                      </div>
                    </div>
                    :
                    <div className="form-group">
                      <label htmlFor="screenshot" className="sr-only">Url</label>
                      <div className="rounded mx-auto- d-block- bg-white text-center text-secondary font-weight-bold">
                      <img id="screenshot" className="card-img-top rounded" src={this.state.screenshot} alt="Screenshot" />
                      </div>
                    </div>
                }

{
                // <div className="form-group">
                //   <label htmlFor="screenshot" className="sr-only">Url</label>
                //   <ImageLoader
                //     src={`${this.state.screenshot}`}
                //     preloader={this.preloader}
                //     className="card card-img-top rounded"
                //     style={{height:10, width:50}}
                //   >

                //   </ImageLoader>
                // </div>

              }
                <div className="form-group">
                  <label htmlFor="url" className="sr-only">url</label>

                  <input type="text" className="form-control" id="url" value={url} placeholder="https://go.rodrigo3d.com" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block" disabled={isInvalid}>Entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
