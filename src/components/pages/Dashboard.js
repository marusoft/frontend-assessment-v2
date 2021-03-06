import React, { Fragment } from "react";

import "../style.css";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Logo_csjnl6.svg" className="logo" alt="logo" />
          </h3>
          <span className="las la-bars"></span>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <a href=".dashboard">
                <span className="las la-icons"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/companies">
                <span className="las la-building"></span>
                <span>Companies</span>
              </a>
            </li>
            <li>
              <a href="/order">
                <span className="lab la-buffer"></span>
                <span>Order Pool</span>
              </a>
            </li>
            <li>
              <a href="/history">
                <span className="las la-list"></span>
                <span>Order History</span>
              </a>
            </li>
            <li>
              <a href="/sub">
                <span className="las la-wallet"></span>
                <span>Subscription</span>
              </a>
            </li>
            <li>
              <a href="/earnings">
                <span className="las la-money-check"></span>
                <span>Earnings</span>
              </a>
            </li>
            <li>
              <a href="/report">
                <span className="las la-signal"></span>
                <span>Reports</span>
              </a>
            </li>
            <li>
              <a href="/settings">
                <span className="las la-cog"></span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="/support">
                <span className="las la-info-circle"></span>
                <span>Support</span>
              </a>
            </li>
            <li>
              <a href="/register">
                <span className="las la-sign-out-alt"></span>
                <span>Sign Out</span>
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
            <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/user_jnk4ye.png" alt="user" />
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
                        <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Line_3_k39hn8.png" alt="" />
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
                        <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Line_3_k39hn8.png" alt="" />
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
                        <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Line_3_k39hn8.png" alt="" />
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
                        <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Line_3_k39hn8.png" alt="" />
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
                      <h4>Companies sent orders to delivery pool today.</h4>
                    </div>
                    <div className="content-1">
                      <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Photo_mnwpfg.png" alt="" />
                      <h3>+84%</h3>
                      <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Graphic_rbcntk.png" alt="" />
                      <h4>Compared to yesterday</h4>
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
                      <h5>Exchange pool today</h5>
                      <small>Most Orders picked by</small>
                    </div>
                    <div className="delivery">
                      <div>
                        <img className="bike" src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065908/frontendassessment/deiverybike_vsmrhp.png" alt="" />
                        <h5>FZ Deliveries</h5>
                        <small>Allen, Lagos</small>
                        <div className="pools">
                          <div className="orders">
                            <span>504</span>
                            <small>Orders</small>
                          </div>
                          <div className="push-order">
                            <span>267</span>
                            <small>Pushed to pool</small>
                          </div>
                        </div>
                      </div>
                      <div className="order-price">
                        <span>N340,000</span>
                        <span className="line2">
                          <img src="https://res.cloudinary.com/marusofteamwork/image/upload/v1625065903/frontendassessment/Graphic1_xto2wv.png" alt="" />
                        </span>
                        <h4>Comapred to yesterday</h4>
                      </div>
                    </div>
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