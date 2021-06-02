import React, { Fragment } from "react";
import logo from "../../assert/Logo.svg";
import user from "../../assert/user.png";
import line from "../../assert/Line 3.png";
import photo from "../../assert/Photo.png";
import graph1 from "../../assert/Graphic.png";
import "../style.css";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <img src={logo} className="logo" alt="logo" />
          </h3>
          <span className="las la-bars"></span>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="">
                <span className="las la-icons"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-building"></span>
                <span>Companies</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="lab la-buffer"></span>
                <span>Order Pool</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-list"></span>
                <span>Order History</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-wallet"></span>
                <span>Subscription</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-money-check"></span>
                <span>Earnings</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-signal"></span>
                <span>Reports</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-cog"></span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="las la-info-circle"></span>
                <span>Support</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <div className="search-wrapper">
            <span className="las la-search"></span>
            <input type="search" placeholder="search" />
          </div>

          <div className="user">
            <img src={user} alt="user" />
            <span className="indicator"></span>
            <div className="user-info">
              <span>Jude Adam</span>
              <span>
                <small>Admin</small>
              </span>
            </div>
          </div>
        </header>

        <main>
          <h2>Dashboard</h2>

          <div className="dashboard-grid">
            {/** card section */}
            <div className="cards">
              <div className="card-single">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Total Exchange Pool Orders</span>
                    </div>
                    <div className="figure">
                      <h2>504</h2>
                      <span>
                        <img src={line} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="card-icons icon-1">
                    <span className="las la-layer-group build"></span>
                    <span className="today">Today</span>
                    <span className="las la-caret-down"></span>
                  </div>
                </div>
              </div>

              <div className="card-single">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Total Companies</span>
                    </div>
                    <div className="figure">
                      <h2>504</h2>
                      <span>
                        <img src={line} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="card-icons icon-2">
                    <span className="las la-building build"></span>
                    <span className="today">Today</span>
                    <span className="las la-caret-down"></span>
                  </div>
                </div>
              </div>

              <div className="card-single">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Total Cancelled Orders</span>
                    </div>
                    <div className="figure">
                      <h2>504</h2>
                      <span>
                        <img src={line} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="card-icons icon-3">
                    <span className="las la-cart-arrow-down build"></span>
                    <span className="today">Today</span>
                    <span className="las la-caret-down"></span>
                  </div>
                </div>
              </div>

              <div className="card-single">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Total Created Orders</span>
                    </div>
                    <div className="figure">
                      <h2>504</h2>
                      <span>
                        <img src={line} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="card-icons icon-4">
                    <span className="las la-layer-group build"></span>
                    <span className="today">Today</span>
                    <span className="las la-caret-down"></span>
                  </div>
                </div>
              </div>
            </div>
            {/** card section end */}

            <section className="order-cards">

              <div className="card-single order-1">
                <div className="card-flex">
                  <div className="card-info order">
                    <div className="order-card-head">
                      <span>120</span>
                      <h4>Companies sent orders
                      to delivery pool today.</h4>
                    </div>
                    <div className="content-1">
                      <img src={photo} alt={photo} />
                      <h3>+84%</h3>
                      <img src={graph1} alt={graph1} />
                      <h4>Comapred to yesterday</h4>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card-single order-2">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Orders Today</span>
                    </div>
                    <div></div>
                  </div>

                </div>
              </div>


              <div className="card-single order-3">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Exchange pool today</span>
                    </div>
                    <div></div>
                  </div>

                </div>
              </div>

              <div className="card-single order-4">
                <div className="card-flex">
                  <div className="card-info">
                    <div className="card-head">
                      <span>Delivered Orders</span>
                    </div>
                    <div></div>
                  </div>

                </div>
              </div>

            </section>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Dashboard;