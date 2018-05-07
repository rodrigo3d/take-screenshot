/**
 * RODRIGO3D.COM
 *
 * @author Rodrigo Ribeiro - me@rodrigo3d.com
 * @see https://rodrigo3d.com
 * @see https://github.com/rodrigo3d/rodrigo3d.com/tree/strata
 */

import React from 'react'
import { HashLink } from 'react-router-hash-link'
import axios from 'axios'

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      database: "https://rodrigo3d.github.io/database.html",
      avatar: '',
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    axios.get(this.state.database)
      .then(data => {
        this.setState({
          avatar: data.data.avatar,
          isLoading: false
        })
      }).catch(error => {
        console.log(error)
      })
  }

  componentDidCatch(error, info) {
    alert(error)
  }

  render() {
    return (
      <header id="header">
        {
          this.state.isLoading
            ?
            <div className="inner">
              <i className="fa fa-circle-o-notch fa-spin"></i>
            </div>
            :
            <div className="inner">
              <HashLink to={`/`} className="image avatar"><img src={this.state.avatar} alt="Avatar" /></HashLink>
              <h1>
                <strong>Oi, eu sou o</strong> Rodrigo Ribeiro.<br />
                Sou desenvolvedor Fullstack, Administrador de Redes e apaixonado por pessoas!
              </h1>
              <br />
              <ul className="icons">
                <li><HashLink to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Sobre</HashLink></li>
                <li><HashLink to="/#projects" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Projetos</HashLink></li>
                <li><HashLink to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Contato</HashLink></li>
              </ul>
            </div>
        }
      </header>
    )
  }
}

export default Header
