<template>
    <div>
        <div class="row mt-4" v-cloak v-if="count">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h2>{{ title }}</h2>
                        </div>
                        <hr>                    
                        
                        <answer @deleted="remove(index)" v-for="(answer, index) in answers"  :answer="answer" :key="answer.id"></answer>

                        <div class="text-center mt-3" v-if="theNextUrl">
                            <button @click.prevent="fetch(theNextUrl)" class="btn btn-outline-secondary">Load more answers</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <new-answer @created="add" :question-id="question.id"></new-answer>
    </div>
</template>

<script>
import Answer from './Answer.vue';
import NewAnswer from './NewAnswer.vue';
import highlight from '../mixins/highlight';
import EventBus from '../event-bus'

export default {
    props: ['question'],

    mixins: [highlight],

    data () {
        return {
            questionId: this.question.id,
            count: this.question.answers_count,
            answers: [],
            answerIds: [],
            nextUrl: null,
            excludeAnswers: []
        }
    },

    created () {
        this.fetch(`/questions/${this.questionId}/answers`);
    },

    methods: {
        add (answer) {
            this.excludeAnswers.push(answer);
            this.answers.push(answer);
            this.count++;
            this.$nextTick(() => {
                this.highlight(`answer-${answer.id}`);
            })
            if (this.count === 1) {
                EventBus.$emit('answers-count-changed', this.count);
            }
        },

        remove (index) {
            this.answers.splice(index, 1);
            this.count--;
            if (this.count === 0) {
                EventBus.$emit('answers-count-changed', this.count);
            }
        },

        fetch (endpoint) {
            this.answerIds = [];

            axios.get(endpoint)
            .then(({data}) => {
                this.answerIds = data.data.map(a => a.id);

                this.answers.push(...data.data);
                
                this.nextUrl = data.links.next;
            })
            .then(() => {
                this.answerIds.forEach(id => {
                    this.highlight(`answer-${id}`);
                })
            })
        }
    },

    computed: {
        title () {
            return this.count + " " + (this.count > 1 ? 'Answers' : 'Answer');
        },

        theNextUrl () {
            if (this.nextUrl && this.excludeAnswers.length) {
                return this.nextUrl + this.excludeAnswers.map(a => '&excludes[]=' + a.id).join('');
            }
            return this.nextUrl;
        }
    },

    components: { Answer, NewAnswer }
}
</script>
