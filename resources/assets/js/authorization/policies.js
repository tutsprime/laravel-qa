export default {
    modify (user, model) {
        return user.id === model.user_id;
    },

    accept (user, answer) {
        return user.id === answer.question.user_id;
    },

    deleteQuestion (user, question) {
        return user.id === question.user_id && question.answers_count < 1;
    }
}