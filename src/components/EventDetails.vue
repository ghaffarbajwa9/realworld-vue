<template>
  <div class="event-card" v-if="event">
    <h4>{{ event.title }}</h4>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  
</template>
  
  <script>
  import EventService from '@/services/EventService.js';
  export default {
    name: "EventDetail",
    props: ['id'],
    data(){
      return{
        event: null,
      }
    },
    created(){
      EventService.getEvent(this.$route.params.id)
    .then(response=>{
      this.event = response.data
    }).catch(error=>{
      console.log(error)
    })
    }
    
  };
  </script>
  
  <style scoped>
  
  </style>