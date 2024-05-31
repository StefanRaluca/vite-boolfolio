<script>

export default {
    name: 'AppHome',
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
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1 class="text_jumbotron">Benvenuto nel mio progetto personale!</h1>
                    <p class="desc_center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore
                        tempora ut
                        eum atque, est excepturi enim soluta corporis aspernatur consequatur, distinctio rem neque
                        adipisci minus voluptates. Vero, enim. Illum!</p>
                    <p class="description_jumbo">lorem</p>
                </div>
                <!-- <div class="col-md-6">
                    Imagine
                </div> -->
            </div>
            <p>Lorem ipsum dolor sit amet consecteturtas nisi, cumque nulla aspernatur repellat facere?</p>
            <p class="lead">
                <router-link to="/projects" class="btn btn-primary">My Project</router-link>
                <router-link to="/about" class="btn btn-secondary">About me</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
.jumbotron {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('');
    background-size: cover;
    background-position: center;
    height: 100vh;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.text_jumbotron {
    font-size: 3rem;
    font-weight: bold;
}

.desc_center {
    font-size: 1.5rem;
    font-weight: 300;
}

.description_jumbo {
    font-size: 1rem;
    color: #aaa;
}

.img-fluid {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.btn-primary {
    background-color: #337ab7;
    border-color: #2e6da4;
    color: #fff;
    margin-right: 10px;
}

.btn-primary:hover {
    background-color: #23527c;
    border-color: #1d4e73;
}

.btn-secondary {
    background-color: #666;
    border-color: #444;
    color: #fff;
    margin-right: 10px;
}

.btn-secondary:hover {
    background-color: #555;
    border-color: #333;
}
</style>