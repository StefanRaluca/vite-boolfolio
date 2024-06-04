<script>

export default {
    name: 'NotFound',
    components: {

    },
    data() {
        return {

        }
    },
    methods: {


    }
}
</script>


<template>
    <div class="not-found">
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <router-link to="/">Go back to the homepage</router-link>
    </div>
</template>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}

.not-found h1 {
    font-size: 8rem;
    margin-bottom: 0;
}

.not-found p {
    font-size: 2rem;
    margin-bottom: 2rem;
}

.not-found a {
    font-size: 20px;
    padding: 10px 10px;
    background-color: #511a6e;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.not-found a:hover {
    background-color: #711ea1;
    ;
}
</style>