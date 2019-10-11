<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex align-items-center">
                            <h2>All Questions</h2>
                            <div class="ml-auto">
                                <router-link :to="{ name: 'questions.create' }" class="btn btn-outline-secondary">Ask Question</router-link>
                            </div>
                        </div>
                        
                    </div>

                    <questions></questions>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Questions from '../components/Questions.vue'

export default {
    components: { Questions }
}
</script>