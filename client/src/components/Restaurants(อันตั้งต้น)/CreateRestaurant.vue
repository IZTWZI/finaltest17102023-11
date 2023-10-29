<template>
    <div>
        <h1>Create Restaurant</h1>
        <form v-on:submit.prevent = "createRestaurant">
            <p>name: <input type="text" v-model="restaurant.name"></p>
            <p>address: <input type="text" v-model="restaurant.address"></p>
            <p>email: <input type="text" v-model="restaurant.email"></p>
            <p>phoneNumber: <input type="text" v-model="restaurant.phoneNumber"></p>
            <p>timeOn: <input type="text" v-model="restaurant.timeOn"></p>
            <p>timeOff: <input type="text" v-model="restaurant.timeOff"></p>
            <p>menuType: <input type="text" v-model="restaurant.menu"></p>
            <p>services: <input type="text" v-model="restaurant.services"></p>
            <p>promotion: <input type="text" v-model="restaurant.promotion"></p>
            <p><button type="submit">create restaurant</button>
            <button v-on:click="navigateTo('/restaurants/')">back</button></p>
        </form>
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
            async createRestaurant () {
                try {
                    await RestaurantService.post(this.restaurant)
                    this.$router.push({
                        name: 'restaurants'
                    })
                }catch (error) {
                    console.log(error)
                }
            },
            navigateTo(route) {
                this.$router.push(route)
            }
        }
    }
</script>
<style scoped>

</style>