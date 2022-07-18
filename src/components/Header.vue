<template>

    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" >NewDeal</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <router-link to="/gallery" class="nav-link" >Galerie</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/comments" class="nav-link" >Commentaires</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
</script>

<style scoped>
.nav-link{
  font-weight: bold;
}
.navbar-brand{
  font-weight: bold;
}
</style>