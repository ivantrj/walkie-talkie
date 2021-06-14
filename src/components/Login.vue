<template>
    <aside>
        <h2>Sign in Anonymously</h2>
        <button @click="auth.signInAnonymously()">Sign In</button>
    </aside>
</template>

<script>
    import { auth } from '../firebase'

    export default {
        data() {
            return {
                auth,
            }
        }
    }
</script>