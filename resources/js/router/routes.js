import QuestionsPage from '../pages/QuestionsPage.vue'
import QuestionPage from '../pages/QuestionPage.vue'
import MyPostsPage from '../pages/MyPostsPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
    {
        path: '/',
        component: QuestionsPage,
        name: 'home'
    },
    {
        path: '/questions',
        component: QuestionsPage,
        name: 'questions'
    },
    {
        path: '/my-posts',
        component: MyPostsPage,
        name: 'my-posts',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/questions/:slug', 
        component: QuestionPage,
        name: 'questions.show'
    },
    {
        path: '*',
        component: NotFoundPage
    }
]

export default routes