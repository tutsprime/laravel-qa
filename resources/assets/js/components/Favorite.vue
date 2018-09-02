<template>
    <a title="Click to mark as favorite question (Click again to undo)" 
        :class="classes" @click.prevent="toggle">
        <i class="fas fa-star fa-2x"></i>
        <span class="favorites-count">{{ count }}</span>
    </a>
</template>
<script>
export default {
    props: ['question'],

    data () {
        return {
            isFavorited: this.question.is_favorited,
            count: this.question.favorites_count,            
            id: this.question.id
        }
    },

    computed: {
        classes () {
            return [
                'favorite', 'mt-2',
                ! this.signedIn ? 'off' : (this.isFavorited ? 'favorited' : '')
            ];
        },

        endpoint () {
            return `/questions/${this.id}/favorites`;
        }        
    },

    methods: {
        toggle () {
            if (! this.signedIn) {
                this.$toast.warning("Please login to favorite this question", "Warning", {
                    timeout: 3000,
                    position: 'bottomLeft'
                });
                return;
            }
            this.isFavorited ? this.destroy() : this.create();
        },

        destroy () {
            axios.delete(this.endpoint)
            .then(res => {
                this.count--;
                this.isFavorited = false;
            });
        },

        create () {
            axios.post(this.endpoint)
            .then(res => {
                this.count++;
                this.isFavorited = true;
            });
        }
    }
}
</script>
