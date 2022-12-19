import React from 'react'
import '../../../index.css'
import Logo from '../../../../../assets/imgs/logo/logoW.svg'

function Sidebar() {
  return (
    <div className="container">

      <aside>
        <div className="top">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <h2>GLI<span className="danger">TCH</span></h2>
          </div>
          <div class="close" id="close-btn">
            <span class="material-icons-sharp">close</span>
          </div>

        </div>
        <div class="sidebar">

          <a href="#">
            <span class="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
          </a>
          <a href="#" class="active">
            <span class="material-icons-sharp">person_outline</span>
            <h3>Administradores</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">receipt_long</span>
            <h3>Filmes</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">insights</span>
            <h3>Generos</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">mail_outline</span>
            <h3>Cadastrar Admin</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">inventory</span>
            <h3>Cadastrar Filmes</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">report_gmailerrorred</span>
            <h3>Cadastrar Genero</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">settings</span>
            <h3>Settings</h3>
            <span class="message-count">26</span>
          </a>
          <a href="#">
            <span class="material-icons-sharp">add</span>
            <h3>Add Product</h3>
          </a>
          <a href="#">
            <span class="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </a>

        </div>


      </aside>
    </div>
  )
}

export default Sidebar;