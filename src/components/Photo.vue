<template>
    <div class="container">
        <img :src="url">
        <p>{{ title }}</p>
    </div>
</template>
<script>
export default {
    props: {
        url: String,
        title: String
    }

}</script>
<style scoped>
p {
    color: black;
    font-size: 15px;
    text-align: center;
    margin-top: -12.5vh;
    margin-bottom: 12.5vh;
    opacity: 0;
}

.container{
    text-align: center;
}

img{
    height: 25vh;
}

img:hover {
    opacity: 0.5;
    transition: 0.5s;
}

img:hover ~ p{
    opacity: 1;
    font-weight: bold;

}
p{
     -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
       -ms-user-select: none;
        user-select: none;
}
</style>