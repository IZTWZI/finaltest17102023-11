<template>
    <div class="create-restaurant-container">
      <h1 class="create-restaurant-heading">Create Restaurant</h1>
      <form v-on:submit.prevent="createRestaurant" class="restaurant-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="restaurant.name" class="form-input" required/>
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <input type="text" id="address" v-model="restaurant.address" class="form-input" required/>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="restaurant.email" class="form-input" required/>
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" v-model="restaurant.phoneNumber" class="form-input" required/>
        </div>
        <div class="form-group">
          <label for="timeOn">Opening Time:</label>
          <input type="text" id="timeOn" v-model="restaurant.timeOn" class="form-input" required/>
        </div>
        <div class="form-group">
          <label for="timeOff">Closing Time:</label>
          <input type="text" id="timeOff" v-model="restaurant.timeOff" class="form-input" required/>
        </div>
        <div class="form-group">
          <label for="menuType">Menu Type:</label>
          <input type="text" id="menuType" v-model="restaurant.menuType" class="form-input" required/>
        </div>
        <div class="form-group">
          <label for="services">Services:</label>
          <input type="text" id="services" v-model="restaurant.services" class="form-input" required/>
        </div>
        <div class="form-group">
          <label for="promotion">Promotion:</label>
          <input type="text" id="promotion" v-model="restaurant.promotion" class="form-input" required/>
        </div>
        <div class="button-group">
          <button type="submit" class="create-button">Create Restaurant</button>
          <button v-on:click="navigateTo('/restaurants/')" class="back-button">Back</button>
        </div>
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
.create-restaurant-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.create-restaurant-heading {
  font-size: 24px;
  margin-bottom: 20px;
}

.restaurant-form {
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.create-button,
.back-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.create-button:hover,
.back-button:hover {
  background-color: #0056b3;
}
</style>