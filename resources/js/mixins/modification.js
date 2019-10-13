import Vote from '../components/Vote.vue';
import UserInfo from '../components/UserInfo.vue';
import MEditor from '../components/MEditor.vue';
import highlight from './highlight';
import destory from './destroy';

export default {
    mixins: [highlight, destory],

    components: { Vote, UserInfo, MEditor },

    data () {
        return {
            editing: false
        }
    },

    methods: {
        edit () {
            this.setEditCache();
            this.editing = true;
        },

        cancel () {
            this.restoreFromCache();
            this.editing = false;
        },

        setEditCache () {},
        restoreFromCache () {},

        update () {
            axios.put(this.endpoint, this.payload())
            .catch(({response}) => {
                this.$toast.error(response.data.message, "Error", { timeout: 3000 });
            })
            .then(({data}) => {
                this.bodyHtml = data.body_html;
                this.$toast.success(data.message, "Success", { timeout: 3000 });
                this.editing = false;
            })
            .then(() => this.highlight());
        },

        payload () {}
    }
}