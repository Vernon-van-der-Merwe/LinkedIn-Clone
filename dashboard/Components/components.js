


document.querySelector("nav").innerHTML = `<div class="container-fluid">
                                                <!-- Toggler -->
                                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main"
                                                    aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <!-- Profile-->



                                                <a class="nav-link pt-2 pb-2 card shadow" onclick="navAction()" data-toggle="modal" data-target="#modal-form">
                                                    <div class="media align-items-center">
                                                    <span class="avatar avatar-sm rounded-circle">
                                                        <img alt="Image placeholder" src="../../../assets/img/theme/FindaComp-transparrent-small.png">
                                                    </span>
                                                    <div class="media-body ml-2 d-none d-lg-block">
                                                        <span class="mb-0 text-sm  font-weight-bold">FincaComp</span>
                                                    </div>
                                                    </div>
                                                </a>



                                                <!-- Collapse -->
                                                <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                                                    <hr class="my-3">
                                                    <!-- Collapse header -->
                                                    <div class="navbar-collapse-header d-md-none">
                                                    <div class="row">
                                                        <div class="col-6 collapse-brand">
                                                        <a href="./index.html">
                                                            <img src="../../../assets/img/brand/blue.png">
                                                        </a>
                                                        </div>
                                                        <div class="col-6 collapse-close">
                                                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main"
                                                            aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                                            <span></span>
                                                            <span></span>
                                                        </button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <!-- Form -->
                                                    <form class="mt-4 mb-3 d-md-none">
                                                    <div class="input-group input-group-rounded input-group-merge">
                                                        <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="Search"
                                                        aria-label="Search">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <span class="fa fa-search"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </form>
                                                    <!-- Navigation -->
                                                    <ul class="navbar-nav">
                                                    <li class="nav-item  active " >
                                                        <a class="nav-link  active "  href="../landing/index.html">
                                                        <i class="ni ni-tv-2 text-primary" style="color: white;" ></i> Home
                                                        </a>
                                                    </li>
                                                    <li class="nav-item ">
                                                        <a class="nav-link " href="../messaging/index.html">
                                                        <i class="ni ni-chat-round text-primary"></i> Messaging
                                                        </a>
                                                    </li>

                                                    

                                                    </ul >
                                                    <hr class="my-3">
                                                    <ul class="navbar-nav">

                                                    <li class="nav-item ">
                                                        <a class="nav-link  " href="../analytics/index.html">
                                                        <i class="ni ni-chart-bar-32 text-primary"></i> Analytics
                                                        </a>
                                                    </li>
                                                    <li class="nav-item ">
                                                        <a class="nav-link  " href="../representatives/index.html">
                                                        <i class="ni ni-circle-08 text-primary"></i> Representatives
                                                        </a>
                                                    </li>

                                                    </ul>
                                                </div>



                                                </div>`