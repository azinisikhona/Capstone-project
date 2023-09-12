<template >
 <div v-if="showroom" class="row p-4">
   <CardComp v-for="car in showroom" :key="car.CarID" :car="car"/>
 </div>
 <div v-else>
    <SpinnerComp/>
 </div>
</template>
<script>
import SpinnerComp from '../components/SpinnerComp.vue';
import CardComp from '../components/CardComp.vue';
export default {
   components: {
        SpinnerComp, CardComp
    },
    computed: {
        showroom() {
            return this.$store.state.showroom
        }
    },

    mounted() {
        this.$store.dispatch("fetchShowroom")
    },

 
}
</script>
<style scoped>
    
</style>
