<template>
    <div>
        <h2>Get All Restaurants</h2>
        <p><button v-on:click="logout">Logout</button>
        <button v-on:click="navigateTo('/restaurant/create/')">create user</button></p>
        <h4>จำนวนร้านอาหาร: {{ restaurants.length }}</h4>
        <div v-for="restaurant in restaurants" v-bind:key="restaurant.id">
            <p>id: {{ restaurant.id }}</p>
            <p>name: {{ restaurant.name }}</p>
            <p>address: {{ restaurant.address }}</p>
            <p>email: {{ restaurant.email }}</p>
            <p>phoneNumber: {{ restaurant.phoneNumber }}</p>
            <p>status: {{ restaurant.status }}</p>
            <p>
                <button v-on:click="navigateTo('/restaurant/' + restaurant.id)">ดูข้อมูลผู้ใช้</button>
                <button v-on:click="navigateTo('/restaurant/edit/' + restaurant.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteRestaurant(restaurant)">ลบข้อมูล</button>
            </p>

        </div>
    </div>
</template>
<script>
import RestaurantService from '@/services/RestaurantService';
export default {
    data() {
        return {
            restaurants: []
        }
    },
    async created() {
        this.restaurants = (await RestaurantService.index()).data
    },
    methods: {
        logout() {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
                name: 'login'
            })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteRestaurant(restaurant) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await RestaurantService.delete(restaurant)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.users = (await RestaurantService.index()).data
        }
    }
}
</script>
<style scoped></style>