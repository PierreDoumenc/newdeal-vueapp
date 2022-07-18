<template>
    <h1>Commentaires</h1>
    <div class="wraper"> 
            <input
            v-model="searchText" placeholder="🔍 Chercher du texte...">
        </div>
<div class="spinner-border" id="loading" role="status"></div>
    <section class="container">
        <div class="row">
            <div v-for="comment in submitSearch()" class="col-sm">
                <Comment :comment="comment"></Comment>
            </div>
        </div>
    </section>

</template>
<script>
import Comment from './Comment.vue'
export default {
    data() {
        return {
            searchText: "",
            comments: []
        };
    },
    created() {
        this.fetchComments();
    },
    methods: {
        async fetchComments() {
            await fetch("https://jsonplaceholder.typicode.com/comments").then(response => response.json()).then(data => data.forEach(com => this.comments.push(com)));
            document.getElementById("loading").setAttribute("style", "display:none")
        },
        submitSearch() {
            return this.comments.filter(comment => comment.body.includes(this.searchText) || comment.name.includes(this.searchText) || comment.email.includes(this.searchText))
        }
    },
    components: { Comment }
}</script>
<style scoped>
h1 {
    margin-left: 5vw;
    margin-top: 5vh;
}

.wraper {
    text-align: center;
}
#loading{
    margin-left: 50%;
    margin-top: 10%;
}

.container {
    text-align: center;
}
</style>