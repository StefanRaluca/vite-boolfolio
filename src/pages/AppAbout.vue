<script>
import { gsap } from "gsap";
export default {
    name: 'AppAbout',
    components: {

    },
    data() {
        return {

        }
    },
    methods: {


    },

    mounted() {
        gsap.from("#head_top", { duration: 1, y: -50, opacity: 0.1 });
        gsap.from("#img_profile", { duration: 1, y: -50, opacity: 0, delay: 0.2 });
        gsap.from("#container_icons", { duration: 1, y: 50, opacity: 0, delay: 0.6 });
        gsap.from("#about-description", { duration: 1, y: 50, opacity: 0, delay: 1 });
        gsap.from("#collaboration", { duration: 1, y: 50, opacity: 0, delay: 1.1 });
        gsap.from("#skills", { duration: 1, y: 50, opacity: 0, delay: 1.2 });
        gsap.from("#container_icons img", {
            duration: 2,
            x: 0,
            y: 0,
            rotation: 360,
            ease: "power2.inOut",
            stagger: 0.2
        });
    }

}


</script>

<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col text-center">
                <h1 class="display-4 mb-4" id="head_top">About Me</h1>
                <img src="../assets/img/raluimg.jpg" alt="Profile Picture" class="img-fluid rounded-circle mb-4"
                    id="img_profile">

                <div class="container_icons mb-4" id="container_icons">
                    <h2 class="text_about">Front-end: <span><img width="48" height="48"
                                src="https://img.icons8.com/fluency/48/html-5.png" alt="html-5" /></span> <img
                            width="48" height="48" src="https://img.icons8.com/fluency/48/css3.png" alt="css3" />
                        <span><img width="48" height="48" src="https://img.icons8.com/color/48/bootstrap--v2.png"
                                alt="bootstrap--v2" /></span>
                        <span><img width="48" height="48"
                                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo.png"
                                alt="external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-shadow-tal-revivo" /></span>
                        <span><img width="48" height="48" src="https://img.icons8.com/fluency/48/vite.png"
                                alt="vite" /></span>


                        <span><img width="48" height="48" src="https://img.icons8.com/fluency/48/javascript.png"
                                alt="javascript" /></span>


                    </h2>

                    <h2 class="text_about">Back-end: <span><img width="48" height="48"
                                src="https://img.icons8.com/nolan/48/php--v2.png" alt="php--v2" /></span>
                        <span><img width="24" height="24"
                                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo.png"
                                alt="external-laravel-is-a-free-open-source-php-web-framework-logo-color-tal-revivo" /></span><span><img
                                width="48" height="48" src="https://img.icons8.com/color/48/mysql-logo.png"
                                alt="mysql-logo" /></span>
                    </h2>
                </div>
                <p class="text_about" id="skills">
                    I am eager to apply my skills and passion for technology to contribute to the success of your
                    company. I'm constantly seeking opportunities to grow as a developer and take on new challenges with
                    creativity and determination. I look forward to the chance to make a meaningful impact and continue
                    my journey in the world of software development.
                </p>

            </div>
            <div class="team mb-4" id="about-description">
                <img width="64" height="64" id="team-icon"
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-team-work-agile-flaticons-lineal-color-flat-icons-2.png"
                    alt="external-team-work-agile-flaticons-lineal-color-flat-icons-2" />
                <p class="text_about" id="collaboration">Collaboration is at the heart of my work ethic. I thrive in
                    team environments
                    where
                    I can share
                    ideas, learn from others, and tackle challenging problems together.</p>
            </div>
        </div>
    </div>
</template>




<style scoped>
.container {
    max-width: 800px;
}

h1 {
    font-size: 3rem;
}

.text_about {
    font-size: 1.25rem;
}

#img_profile {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}

.container_icons,
.collaboration {
    display: flex;
    align-items: baseline;
    flex-direction: column-reverse;
    justify-content: center;
}


.container_icons i,
.collaboration i {
    color: #42b983;
    margin-right: 10px;
}

.collaboration p {
    margin-left: 10px;
}

.team {
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
        align-self: center;
    }
}


@media (max-width: 767.98px) {
    h1 {
        font-size: 2rem;
    }

    .text_about {
        font-size: 1.1rem;
    }

    #img_profile {
        width: 120px;
        height: 120px;
    }
}
</style>