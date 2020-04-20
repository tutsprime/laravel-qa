<template>
    <div class="spinner" :style="getMinWidth">
        <i class="fa fa-spinner fa-spin" :class="sizeClass"></i>
    </div>
</template>

<script>
export default {
    props: {
        small: {
            type: Boolean,
            default: false
        },
        minWidth: {
            type: Number,
            default: 109.61
        }
    },

    computed: {
        sizeClass () {
            return this.small ? '' : 'fa-3x'
        },

        getMinWidth () {
            return {
                minWidth: this.minWidth + 'px'
            }
        }
    }
}
</script>

<style scoped>
.spinner {
    color: #ddd; 
    text-align: center;
    /* min-width: 109.61px; */
}
</style>