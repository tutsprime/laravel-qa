<template>
    <div class="row mt-4" v-cloak v-if="count">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <h2>{{ title }}</h2>
                    </div>
                    <hr>                    
                    
                    <answer v-for="answer in answers"  :answer="answer" :key="answer.id"></answer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Answer from './Answer.vue';

export default {
    props: ['answers', 'count'],

    computed: {
        title () {
            return this.count + " " + (this.count > 1 ? 'Answers' : 'Answer');
        }
    },

    components: { Answer }
}
</script>
