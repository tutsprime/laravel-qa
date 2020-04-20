<template>
    <div class="row align-items-center">
        <div class="col">
            <button :disabled="isFirst" @click="prev" class="btn btn-outline-secondary">Newer</button>
        </div>
        <!-- 1st column -->
    
        <div class="col text-center">{{ pagesInfo }}</div>
        <!-- 2nd column -->
    
        <div class="col text-right">
            <button :disabled="isLast" @click="next" class="btn btn-outline-secondary">Older</button>
        </div>
        <!-- 3rd column -->
    </div>
</template>

<script>
export default {
    props: ['meta', 'links'],

    computed: {
        pagesInfo () {
            let currentPage = this.meta.current_page || 1,
                lastPage = this.meta.last_page || 1;
                
            return `Page ${currentPage} of ${lastPage}`
        },

        isFirst () {
            return this.meta.current_page === 1;
        },
        
        isLast () {
            return this.meta.current_page === this.meta.last_page;
        }
    },

    methods: {
        switchPage () {
            this.$router.push({
                name: 'questions',
                query: {
                    page: this.meta.current_page
                },
            });
        },

        prev () {
            if (! this.isFirst) {
                this.meta.current_page--;
            }
            this.switchPage();
        },

        next () {
            if (! this.isLast) {
                this.meta.current_page++;
            }

            this.switchPage();
        }
    }
}
</script>