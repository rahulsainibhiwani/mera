function Sidebar() {
  return (
    <div>
      <div class="main-sidebar sidebar-style-2">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <a href="/dashboard">Stisla</a>
          </div>
          <div class="sidebar-brand sidebar-brand-sm">
            <a href="/dashboard">MKP</a>
          </div>
          <ul class="sidebar-menu ">
            <li class="menu-header ">Dashboard</li>
            <li class="nav-item  ">
              <a href="/dashboard" class="nav-link ">
                <i class="fas fa-fire"></i>
                <span>Dashboard</span>
              </a>
            </li>
            {/* <li class="menu-header">Starter</li> */}
            <li class="nav-item dropdown active">
              <a href="#" class="nav-link has-dropdown" data-toggle="dropdown">
                <i class="fas fa-users"></i> <span>Users</span>
              </a>
              <ul class="dropdown-menu" style={{ display: " block" }}>
                <li>
                  <a class="nav-link" href="/usertable">
                    User List
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="nav-link " href="/notFound">
                <i class="far fa-square"></i> <span>Blank Page</span>
              </a>
            </li>
            <li class="nav-item  ">
              <a href="/createProduct" class="nav-link ">
                <i className="fa-brands fa-product-hunt"></i>
                <span>Create Product</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Sidebar;
