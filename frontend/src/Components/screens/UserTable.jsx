import React from "react";

function UserTable() {
  return (
    <section class="section">
      <div class="section-header">
        <h1>Table</h1>
        <div class="section-header-breadcrumb">
          <div class="breadcrumb-item active">
            <a href="/dashboard">Dashboard</a>
          </div>
          {/* <div class="breadcrumb-item">
            <a href="#">Components</a>
          </div> */}
          <div class="breadcrumb-item">Table</div>
        </div>
      </div>

      <div class="section-body">
        {/* <h2 class="section-title">Table</h2>
        <p class="section-lead">Example of some Bootstrap table components.</p> */}

        <div class="row">
          <div class="col-12 col-md-12 col-lg-12">
            <div class="card">
              <div class="card-header">
                <h4> Total User Table</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered table-md">
                    <tbody>
                      <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Irwansyah Saputra</td>
                        <td>2017-01-09</td>
                        <td>
                          <div class="badge badge-success">Active</div>
                        </td>
                        <td
                          className="d-flex"
                          style={{ gap: "5px", textAlign: "center" }}
                        >
                          <a href="#" class="btn btn-info">
                            Detail
                          </a>
                          <a href="#" class="btn btn-primary">
                            Update{" "}
                          </a>
                          <a href="#" class="btn btn-danger">
                            Delete
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="card-footer text-right">
                <nav class="d-inline-block">
                  <ul class="pagination mb-0">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fas fa-chevron-left"></i>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1 <span class="sr-only">(current)</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <i class="fas fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserTable;
