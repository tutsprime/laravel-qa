<template>
    <div>
        <div class="card-body">
            <spinner v-if="$root.loading"></spinner>
            <div v-else-if="questions.length">
                <question-excerpt v-for="question in questions" :question="question" :key="question.id"></question-excerpt>
            </div>
            <div v-else class="alert alert-warning">
                <strong>Sorry</strong> There are no questions available.
            </div>
        </div>
        <div class="card-footer">
            <pagination :meta="meta" :links="links"></pagination>
        </div>
    </div>
</template>

<script>
import QuestionExcerpt from './QuestionExcerpt.vue'
import Pagination from './Pagination.vue'
import eventBus from '../event-bus'

export default {
    components: { 
        QuestionExcerpt,
        Pagination
    },
    
    data () {
        return {
            questions: [],
            meta: {},
            links: {}
        }
    },

    mounted () {
        this.fetchQuestions();

        eventBus.$on('deleted', (id) => {
            let index = this.questions.findIndex(question => id === question.id)  
            this.remove(index)
        })
    },

    methods: {
        fetchQuestions () {
            axios.get('/questions', { params: this.$route.query })
                 .then(({ data }) => {
                     this.questions = data.data
                     this.links = data.links
                     this.meta = data.meta
                 })
        },

        remove (index) {
            this.questions.splice(index, 1)
            this.count--
        }
    },

    watch: {
        "$route": 'fetchQuestions'
    }
}
</script>