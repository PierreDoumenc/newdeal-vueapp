<template>
    <h1>Galerie</h1>
    <div class="spinner-border" id="loading" role="status">
</div>
    <section class="container">
        <div class="row">
            <div v-for="photo in photos" class="col-sm">
                <Photo :url="photo.thumbnailUrl" :title="photo.title.split(' ')[0]"></Photo>
            </div>
        </div>
    </section>
</template>
<script>
import Photo from './Photo.vue'
export default {
    data() {
        return {
            photos: []
        };
    },
    created() {
        this.fetchPhotos();
    },
    methods: {
        async fetchPhotos() {
            await fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json()).then(data => data.slice(0, 52).forEach(pic => this.photos.push(pic)));
            document.getElementById("loading").setAttribute("style", "display:none")
        }
    },
    components: { Photo }
}
</script>
<style scoped>
h1{
    margin-left: 5vw;
    margin-top: 5vh;
}

#loading{
    margin-left: 50%;
}

.col-sm{
    margin-top: 5vh;
    
}
</style>