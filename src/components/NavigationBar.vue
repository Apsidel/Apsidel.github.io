<template>
    <div class="navigation-bar">
        <div class="list">
            <ul>
                <li id="logo"><img height="64px" src="../assets/logo-stripes.svg" /></li>
                <li>Gallery</li>
                <li>Photography</li>
                <li>Design</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>
        </div>

        <div class="social-media"></div>

        <div class="bar"></div>

    </div>
</template>

<style scoped>
    .navigation-bar {
        /* background-color: #FF5B5B; */
        position: fixed;
        top: 0;
        left: 30px;
        bottom: 0;
        overflow: auto; 
        padding-right: 70px; 
        display: flex;
        flex-direction: column;
    }

    .list {
        font-family: 'Spline Sans Mono', Helvetica, sans-serif;
        padding-top: 50px;
        padding-left: 20px;

    }

    .list li {
        list-style: none;
        padding-bottom: 40px;
    }

    #logo:hover {
        text-decoration: underline;
        /* text-decoration-color: #FF5B5B; */
    }

    .bar {
        height: 502px;
        position: fixed;
        left: 240px;
        width: 1px;
        margin-top: 220px;
        background-color: #C5C3C3;
    }

    #logo {
        padding-bottom: 200px;
    }
</style>