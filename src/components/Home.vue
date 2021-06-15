<template>
    <div>
        <h1>Home</h1>
        
        <User>
            <template  v-slot:user="{ user }">
                <div v-if="user">
                    <UserProfile :user="user"/>.
                </div>
                <Login/>
            </template>
        </User>
    </div>
</template>

<script>
import Login from './Login'
import User from './User'
import UserProfile from './UserProfile'

export default {
    components: {
        Login,
        User,
        UserProfile
    }
}
</script>

<style>

</style>