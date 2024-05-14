<template>
  <nav>
    <router-link class="link" :to="{name: 'EventsList'}">Events</router-link>
    <router-link class="link" :to="{name: 'CreateEvent'}">Create Event</router-link> 
    <router-link class="link" :to="{name: 'About'}">About</router-link> 
    <router-link class="link" :to="{name: 'Contact'}">Contact</router-link>
  </nav>
  <router-view/>
</template>
<script>

</script>
<style scoped>
  nav{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .link{
    margin-left: 10px ;
  }
  .link:hover{
    font-weight: bold;
  }
</style>

