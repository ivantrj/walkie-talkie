<template>
    <div>
        <h1>Home</h1>
        
        <User>
            <template  v-slot:user="{ user }">
                <div v-if="user">
                    Logged in as {{ user.uid }}
                </div>
                <Login/>
            </template>
        </User>
    </div>
</template>

<script>
import Login from './Login'
import User from './User'

export default {
    components: {
        Login,
        User
    }
}
</script>

<style>

</style>