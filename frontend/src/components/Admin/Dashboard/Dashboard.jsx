import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';


function Dashboard() {
  // create function to date now and format to pt-br
  const date = new Date();

  const day = date.getDate();
  
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  
  return (
    <div>
      <div className="container">
        <aside>
          <div className="top">
            <h2>MOVIE<span className="sucesso">AL</span></h2>
            <div className="close" id="close-btn">
              <span className="material-icons-sharp">close</span>
            </div>

          </div>
          <div className="sidebar">
            <Link to="/dashboard">
              <span className="material-icons-sharp">grid_view</span>
              <h3>Dashboard</h3>
            </Link>
            <Link to="/clientes">
              <span className="material-icons-sharp">person_outline</span>
              <h3>Clientes</h3>
            </Link>
            <Link to="/pedidos">
              <span className="material-icons-sharp">movie_filter_outline</span>
              <h3>Pedidos</h3>
            </Link>
            <Link to="/analise">
              <span className="material-icons-sharp">tv</span>
              <h3>Analise</h3>
            </Link>
            <Link to="/mensagens">
              <span className="material-icons-sharp">category</span>
              <h3>Menssagens </h3>
            </Link>
           
            <Link to="/sair">
              <span className="material-icons-sharp">logout</span>
              <h3>Sair</h3>
            </Link>
          </div>
        </aside>
        <main>
          <h1>Dashboard</h1>
          <div className="data">
            <input type="date"  />
          </div>
          <div className="relatorios">

            <div className="vendas">
              <span className="material-icons-sharp">analytics</span>
              <div className="meio">
                <div className="esquerda">
                  <h3>Total de Vendas</h3>
                  <h1>R$25.345</h1>
                </div>
                <div className="progresso">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="numero">
                    <p>83%</p>
                  </div>
                </div>
              </div>
              <small className="legendas">Ultimas 24h</small>
            </div>

            <div className="gastos">
              <span className="material-icons-sharp">
                bar_chart
              </span>
              <div className="meio">
                <div className="esquerda">
                  <h3>Total de Gastos</h3>
                  <h1>R$12.185</h1>
                </div>
                <div className="progresso">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="numero">
                    <p>67%</p>
                  </div>
                </div>
              </div>
              <small className="legendas">Ultimas 24h</small>
            </div>

            <div className="receita">
              <span className="material-icons-sharp">
                stacked_line_chart
              </span>
              <div className="meio">
                <div className="esquerda">
                  <h3>Receita Total</h3>
                  <h1>R$10.845</h1>
                </div>
                <div className="progresso">
                  <svg>
                    <circle cx="38" cy="38" r="36"></circle>
                  </svg>
                  <div className="numero">
                    <p>44%</p>
                  </div>
                </div>
              </div>
              <small className="legendas">Ultimas 24h</small>
            </div>


          </div>

          <div className="pedidos-recentes">
            <h2>Pedidos Recentes</h2>
            <table>
              <thead>
                <tr>
                  <th>Nome do Produto</th>
                  <th>Nº do Produto</th>
                  <th>Pagamento</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Foldable Mine Drone</td>
                  <td>85631</td>
                  <td>Due</td>
                  <td className="atencao">Pendente</td>
                  <td className="primaria">Detalhes</td>
                </tr>

              </tbody>
            </table>
            <a href="#">Mostre Tudo</a>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard