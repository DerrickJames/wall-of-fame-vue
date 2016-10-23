<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed"
  data-toggle="collapse" data-target="#navbar" aria-expanded="false"
  aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Wall Of Fame</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div id="app" class="container" style="margin-top: 70px;">
      <router-view></router-view>
    </div>
  </div>
</template>
