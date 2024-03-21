<template>
  <header class="navigation fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <NuxtLink class="navbar-brand font-tertiary h3" href="/"
        ><img class="img-logo" src="~/assets/images/logo.png" alt="Myself"
      /></NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="navigation">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#about">about</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#services">Services</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/portfolio">Portfolio</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
