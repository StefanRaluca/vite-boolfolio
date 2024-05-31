<script>
export default {
    name: 'AppFooter'
}
</script>


<template>
    <footer class="bg-light text-dark mt-5">
        <div class="container py-4">
            <div class="row">
                <div class="col-md-4 mb-3 text-center logo_col">
                    <p>"Building bridges between code and creativity, one line at a time."</p>
                    <img src="../assets/img/Screenshot 2024-05-31 162318.png" alt="Logo" class=" mt-3">
                </div>
                <div class="col-md-4 mb-3">
                    <h5>Contact Me</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">
                            <i class="fas fa-envelope me-2"></i> stefanraluca22@gmail.com
                        </li>
                        <li class="mb-2">
                            <i class="fas fa-phone me-2"></i> +39 3247964485
                        </li>
                        <li>
                            <i class="fas fa-map-marker-alt me-2"></i> Prato (PO), Italy
                        </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Follow Me</h5>
                    <ul class="list-unstyled d-flex list_folow">
                        <li>
                            <a href="#" class="text-dark"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/mariana-raluca-stefan-1b9936203/" class="text-dark"><i
                                    class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/StefanRaluca" class="text-dark"><i
                                    class="fab fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-dark text-light py-3">
            <div class="container text-center">
                <small>&copy; 2024 Mariana Raluca Stefan. All rights reserved.</small>
            </div>
        </div>
    </footer>
</template>

<style>
footer .list-unstyled {
    padding-left: 0;
    list-style: none;
}

footer .list-unstyled a {
    text-decoration: none;
}

.list_folow {
    gap: 20px;
}

.logo_col {
    p {
        font-style: italic;

    }

    img {
        width: 130px;
    }
}
</style>