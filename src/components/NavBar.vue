<template>
  <nav class="navbar">
    <div class="logo">News Website</div>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/politics">Politics</router-link>
      <router-link to="/sports">Sports</router-link>
      <router-link to="/technology">Technology</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 1rem;
}
</style>
