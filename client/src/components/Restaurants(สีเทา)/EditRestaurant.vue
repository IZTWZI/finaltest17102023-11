<template>
    <div>
        <h1>Edit Restaurant</h1>
        <form v-on:submit.prevent = "editRestaurant">
            <p>name: <input type="text" v-model="restaurant.name"></p>
            <p>address: <input type="text" v-model="restaurant.address"></p>
            <p>email: <input type="text" v-model="restaurant.email"></p>
            <p>phoneNumber: <input type="text" v-model="restaurant.phoneNumber"></p>
            <p>timeOn: <input type="text" v-model="restaurant.timeOn"></p>
            <p>timeOff: <input type="text" v-model="restaurant.timeOff"></p>
            <p>menuType: <input type="text" v-model="restaurant.menuType"></p>
            <p>services: <input type="text" v-model="restaurant.services"></p>
            <p>promotion: <input type="text" v-model="restaurant.promotion"></p>
            <p><button type="submit">edit restaurant</button>
            <button v-on:click="navigateTo('/restaurants/')">back</button></p>
        </form>
        <hr>
        <div>
            <p>name: {{ restaurant.name }}</p>
            <p>address: {{ restaurant.address }}</p>
            <p>email: {{ restaurant.email }}</p>
            <p>phoneNumber: {{ restaurant.phoneNumber }}</p>
            <p>timeOn: {{ restaurant.timeOn }}</p>
            <p>timeOff: {{ restaurant.timeOff }}</p>
            <p>menuType: {{ restaurant.menuType }}</p>
            <p>services: {{ restaurant.services }}</p>
            <p>promotion: {{ restaurant.promotion }}</p>
            <p></p>
        </div>
    </div>
</template>
<script>
import RestaurantService from '../../services/RestaurantService';

    export default {
        data () {
            return {
                restaurant: {
                    name: '',
                    address: '',
                    email: '',
                    phoneNumber: '',
                    status: 'active',
                    timeOn: '',
                    timeOff: '',
                    menuType: '',
                    services: '',
                    promotion: '',
                }
            }
        },
        methods: {
            async editRestaurant () {
                try {
                    await RestaurantService.put(this.restaurant)
                    this.$router.push({
                        name: 'restaurants'
                    })
                }catch (error) {
                    console.log(error)
                }
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
    }
</script>
<style scoped>

</style>