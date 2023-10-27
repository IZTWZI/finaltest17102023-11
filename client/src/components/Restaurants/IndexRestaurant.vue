<template>
    <div class="restaurants-container">
      <h2 class="restaurants-heading">All Restaurants</h2>
      <div class="action-buttons">
        <button v-on:click="logout" class="logout-button">Logout</button>
        <button v-on:click="navigateTo('/restaurant/create/')" class="create-restaurant-button">Create Restaurant</button>
      </div>
      <h4>Total Restaurants: {{ restaurants.length }}</h4>
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="restaurant-card">
        <p>ID: {{ restaurant.id }}</p>
        <p>Name: {{ restaurant.name }}</p>
        <p>Address: {{ restaurant.address }}</p>
        <p>Email: {{ restaurant.email }}</p>
        <p>Phone Number: {{ restaurant.phoneNumber }}</p>
        <p>Status: {{ restaurant.status }}</p>
        <div class="button-group">
          <button v-on:click="navigateTo('/restaurant/' + restaurant.id)" class="view-button">View Details</button>
          <button v-on:click="navigateTo('/restaurant/edit/' + restaurant.id)" class="edit-button">Edit Info</button>
          <button v-on:click="deleteRestaurant(restaurant)" class="delete-button">Delete Info</button>
        </div>
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
<style scoped>
.restaurants-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.restaurants-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
}

.logout-button,
.create-restaurant-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-button:hover,
.create-restaurant-button:hover {
  background-color: #0056b3;
}

.restaurant-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
  text-align: left;
  margin-top: 20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.view-button{
  background-color: #28a745;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.edit-button{
  background-color: #edce1a;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.delete-button {
  background-color: #dc3545;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.view-button:hover{
  background-color: #18662a;
}

.edit-button:hover{
  background-color: #d1b518;
}

.delete-button:hover {
  background-color: #a02834;
}
</style>