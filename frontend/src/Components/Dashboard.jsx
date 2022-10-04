import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "../../node_modules/jqvmap/dist/jqvmap.min.css";
import "../../node_modules/summernote/dist/summernote-bs4.css";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
// import "../assets/css/style.css";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const Navigate = useNavigate();
  const adminLogin = useSelector((state) => state.adminLogin);
  const { loading, error, adminInfo } = adminLogin;
  useEffect(() => {
    if (!adminInfo) {
      Navigate("/");
    }
  });
  return (
    <section class="section">
      <div class="section-header">
        <h1>Dashboard</h1>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card card-statistic-1">
            <div class="card-icon bg-primary">
              <i class="far fa-user"></i>
            </div>
            <div class="card-wrap">
              <div class="card-header">
                <h4>Total Admin</h4>
              </div>
              <div class="card-body">10</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card card-statistic-1">
            <div class="card-icon bg-danger">
              <i class="far fa-newspaper"></i>
            </div>
            <div class="card-wrap">
              <div class="card-header">
                <h4>News</h4>
              </div>
              <div class="card-body">42</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card card-statistic-1">
            <div class="card-icon bg-warning">
              <i class="far fa-file"></i>
            </div>
            <div class="card-wrap">
              <div class="card-header">
                <h4>Reports</h4>
              </div>
              <div class="card-body">1,201</div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card card-statistic-1">
            <div class="card-icon bg-success">
              <i class="fas fa-circle"></i>
            </div>
            <div class="card-wrap">
              <div class="card-header">
                <h4>Online Users</h4>
              </div>
              <div class="card-body">47</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
