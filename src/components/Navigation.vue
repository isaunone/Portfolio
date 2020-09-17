<template>
    <nav class="container navbar navbar-expand-lg">
        <a class="logo" href="#">V.</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/home" >Home</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link scroll" href="#portfolioBlocks">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Resume</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link scroll" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
