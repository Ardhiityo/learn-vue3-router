<template>
  <nav>
    <a href="/">Home</a>
    <br />
    <a href="/about">About</a>
    <hr />
    <router-link active-class="active" to="/">Home</router-link>
    <br />
    <router-link active-class="active" to="/about">About</router-link>
    <hr />
  </nav>
</template>

<style scoped>
.active {
  color: red;
  background-color: rgb(210, 217, 224);
  padding: 3px;
  border-radius: 5px;
}
</style>