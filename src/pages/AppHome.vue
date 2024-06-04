<script>
import { gsap } from "gsap";

export default {
    name: 'AppHome',
    mounted() {
        gsap.from("#jumbotron-heading", { duration: 1, y: -50, opacity: 0, delay: 0.5 });
        gsap.from("#jumbotron-description", { duration: 1, y: -50, opacity: 0, delay: 0.7 });
        gsap.from("#jumbotron-subdescription", { duration: 1, y: -50, opacity: 0, delay: 0.9 });
        this.animateButtons();
        gsap.from("#jumbotron-image", { duration: 1, scale: 0, opacity: 0, delay: 0.5, ease: "back.out(1.7)" });
    },
    methods: {
        animateButtons() {
            const buttons = gsap.utils.toArray('.btn');
            buttons.forEach(button => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power3.out",
                    repeat: -1,
                    yoyo: true
                });

            });
        }
    }
}
</script>

<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <h1 class="display-8" id="jumbotron-heading">Mariana Raluca Stefan</h1>
                    <h4 class="display-8" id="jumbotron-heading">Junior Full-Stack Developer</h4>
                    <p class="lead" id="jumbotron-description">I'm a passionate full-stack developer with a keen
                        creativity and problem-solving attitude. My goal is to create engaging and innovative digital
                        experiences that leave a positive impact.</p>
                    <p class="lead" id="jumbotron-subdescription">Turning ideas into reality through code and
                        creativity.</p>
                    <div class="button-wrapper">
                        <router-link to="/projects" class="btn btn px-4 py-2 m-2 text-white btn-secondary"
                            id="projects-button">
                            <span>My Projects</span>
                        </router-link>
                        <router-link to="/about" class="btn btn-secondary" id="about-button">
                            <span>About Me</span>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 text-center">
                    <img src="../assets/img/raluimg.jpg" alt="" class="img-fluid rounded-circle mb-4"
                        id="jumbotron-image">
                    <div class="button-wrapper">
                        <a href="https://github.com/StefanRaluca" target="_blank" class="btn"><img width="64"
                                height="64" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/github.png"
                                alt="github" /></a>
                        <a href="https://www.linkedin.com/in/mariana-raluca-stefan-1b9936203/" target="_blank"
                            class="btn"><img width="64" height="64"
                                src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/linkedin-circled.png"
                                alt="linkedin-circled" /></a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.jumbotron {
    background-size: cover;
    background-position: center;
    height: 100vh;
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(217deg, rgb(0 0 0 / 87%), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, #27282b, rgba(0, 255, 0, 0) 70.71%), linear-gradient(336deg, rgba(0, 0, 255, .8), rgba(0, 0, 255, 0) 70.71%), url(https://www.elegantthemes.com/blog/wp-content/uploads/2018/04/Best-Code-and-Text-Editors.png);
}

.img-fluid {
    max-width: 70%;
    height: auto;
}

.btn-primary {
    background-color: #337ab7;
    border-color: #2e6da4;
    color: #fff;

}

.btn-primary:hover {
    background-color: #23527c;
    border-color: #1d4e73;
}

.btn-secondary {
    background-color: #666;
    border-color: #444;
    color: #fff;
}

.btn-secondary:hover {
    background-color: #555;
    border-color: #333;
}
</style>