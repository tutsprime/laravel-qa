<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex align-items-center">
                            <h2>Ask Question</h2>
                            <div class="ml-auto">
                                <router-link :to="{ name: 'questions' }" class="btn btn-outline-secondary">Back to all Questions</router-link>
                            </div>
                        </div>
                        
                    </div>

                    <div class="card-body">
                        <question-form @submitted="create"></question-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuestionForm from '../components/QuestionForm.vue'
import EventBus from '../event-bus'
export default {
    components: { QuestionForm },

    methods: {
        create (data) {
            axios.post('/questions', data)
                 .then(({ data }) => {
                     this.$router.push({ name: 'questions' })
                     this.$toast.success(data.message, "Success")
                 })
                 .catch(({ response }) => {
                     EventBus.$emit('error', response.data.errors)
                 })
        }
    }
}
</script>