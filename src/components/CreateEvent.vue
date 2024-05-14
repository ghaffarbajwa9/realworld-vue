<template>
  <layout-div>
    <h2 class="text-center mt-5 mb-3">Create New Event</h2>
    <div class="card">
        <div class="card-body">
            <form>
                <div class="form-group">
                    <label htmlFor="category">Category</label>
                    <input 
                        v-model="event.category"
                        type="text"
                        class="form-control"
                        id="category"
                        name="category"/>
                </div>
                <div class="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        v-model="event.title"
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"/>
                </div>
                <div class="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        v-model="event.description"
                        class="form-control"
                        id="description"
                        rows="3"
                        name="description"></textarea>
                </div>
               <div class="form-group">
                    <label htmlFor="location">Location</label>
                    <input 
                        v-model="event.location"
                        type="text"
                        class="form-control"
                        :format="formatTime"
                        id="location"
                        name="location"/>
                </div>
                <div class="form-group">
                    <label htmlFor="date">Date</label>
                    <VueDatePicker date-picker
                        v-model="event.date"
                        type="text"
                        :format="dateformat"
                        class="form-control"
                        id="date"
                        name="date" />
                </div>
                <div class="form-group">
                    <label htmlFor="time">Time</label>
                    <VueDatePicker time-picker
                        v-model="event.time"
                        class="form-control"
                        id="time"
                        name="time" />
                </div>
                <div class="form-group">
                    <label htmlFor="organizer">Organizer</label>
                    <input 
                        v-model="event.organizer"
                        class="form-control"
                        id="organizer"
                        rows="3"
                        name="organizer"/>
                </div>
                <button 
                    @click="handleSave()"
                    type="button"
                    class="btn btn-outline-primary mt-3">
                    Create Event
                </button>
            </form>
        </div>
    </div>
  </layout-div>
</template>
<script>
import EventService from '@/services/EventService';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { uuid } from 'vue3-uuid';



export default{
    name: "CreateEvent",
    components: {
        VueDatePicker
    },
    data(){
        return{
            id: uuid.v1(),
            event: {
              "id": this.id,
              "category": "",
              "title": "",
              "description": "",
              "location": "",
              "date": "",
              "time": "",
              "organizer": ""
            },
        }
    },
    methods:{
        handleSave(){
            this.event.time = this.formatTime(this.event.time);
            this.event.date = this.dateformat(this.event.date);
            EventService.createEvent(this.event)
            .then(response=>{
                console.log(response)
                this.$router.push('/')
                })
            .catch(error=>{
                console.log(error)
            })
        },
        dateformat(date){
           const months = [
              "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
            
            const day = date.getDate();
            const monthIndex = date.getMonth();
            const year = date.getFullYear();
            
            return `${months[monthIndex]} ${day}, ${year}`;
        },
        formatTime(time) {
          if (typeof time === 'string') {
          return time;
        }

        if (typeof time === 'object' && time.hours !== undefined && time.minutes !== undefined) {
          const hours = time.hours.toString().padStart(2, '0');
          const minutes = time.minutes.toString().padStart(2, '0');
          return `${hours}:${minutes}`;
        }

        return '';
        },
    },
    
}
</script>