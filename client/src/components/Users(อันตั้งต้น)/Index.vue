<template>
    <div>
        <h2>Get All Users</h2>
        <p><button v-on:click="logout">Logout</button>
        <button v-on:click="navigateTo('/user/create/')">create user</button></p>
        <h4>จำนวนผู้ใช้งาน: {{ users.length }}</h4>
        <div v-for="user in users" v-bind:key="user.id">
            <p>id: {{ user.id }}</p>
            <p>ชื่อ: {{ user.name }}</p>
            <p>นามสกุล: {{ user.lastname }}</p>
            <p>status: {{ user.status }}</p>
            <p>
                <button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
                <button v-on:click="navigateTo('/user/edit/' + user.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
            </p>

        </div>
    </div>
</template>
<script>
import UsersService from '@/services/UsersService';
export default {
    data() {
        return {
            users: []
        }
    },
    async created() {
        this.users = (await UsersService.index()).data
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
        async deleteUser(user) {
            let result = confirm("Wnat to delete?")
            if (result) {
                try {
                    await UsersService.delete(user)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.users = (await UsersService.index()).data
        }
    }
}
</script>
<style scoped></style>