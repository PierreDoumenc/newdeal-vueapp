<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{comment.name.split(" ")[0]+" "+comment.name.split(" ")[1]}}</h5>
            <p class="card-text">{{comment.body}}</p>
            <h6>Posté par {{comment.postId}}</h6>
            <b>Contact: {{comment.email}}</b>        
        </div>
    </div>
</template>

<script>
export default {
    props: {
        comment: {
            postId: Number,
            id: Number,
            name: String,
            email: String,
            body: String
        }
    }
}

</script>
<style scoped>
.card{
    margin-top: 5vh;
    width: 18rem;
    background-color: rgb(242, 234, 234);

}

</style>