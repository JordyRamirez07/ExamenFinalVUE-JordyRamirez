<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Colegio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Inicio</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Registro Estudiantil
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" to="/listarE">Listar Estudiantes</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/createE">Registrar Estudiante</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Cursos
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" to="/listarC">Listar Cursos</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/createC">Registrar Cursos</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuarios
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" to="/listarU">Listar Usuarios</router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/createU">Registrar Usuarios</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="containter-fluid">
  <router-view/>
</div>
</template>