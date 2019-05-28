<template>
    <div class="container">
        <question :question="question"></question>
        <answers :question="question"></answers>        
    </div>
</template>

<script>
import Question from '../components/Question.vue';
import Answers from '../components/Answers.vue';

export default {
    components: { Question, Answers },
    
    props: ['question']
}
</script>
