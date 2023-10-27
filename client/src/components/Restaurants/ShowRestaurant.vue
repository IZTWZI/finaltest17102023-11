<template>
    <div>
        <div>
            <h1>Get Restaurant By Id</h1>
            <p>Restaurant ID: {{ restaurant.id }}</p>
            <p>name: {{ restaurant.name }}</p>
            <p>address: {{ restaurant.address }}</p>
            <p>email: {{ restaurant.email }}</p>
            <p>phoneNumber: {{ restaurant.phoneNumber }}</p>
            <p>status: {{ restaurant.status }}</p>
            <p>timeOn: {{ restaurant.timeOn }}</p>
            <p>timeOff: {{ restaurant.timeOff }}</p>
            <p>menuType: {{ restaurant.menuType }}</p>
            <p>services: {{ restaurant.services }}</p>
            <p>promotion: {{ restaurant.promotion }}</p>
            <p><button v-on:click="navigateTo('/restaurants/')">กลับ</button></p>

        </div>
    </div>
</template>
<script>
import RestaurantService from '@/services/RestaurantService';

export default {
        data () {
            return {
                restaurant: null
            }
        },
        async created () {
            try {
                let restaurantId = this.$route.params.restaurantId
                this.restaurant = (await RestaurantService.show(restaurantId)).data
            }catch (error) {
                console.log (error)
            }
        },
        methods: {
            navigateTo (route) {
                this.$router.push(route)
            },
        }

    }
</script>
<style scoped>

</style>