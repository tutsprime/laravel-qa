export default {
    modify (user, model) {
        return user.id === model.user.id;
    },

    accept (user, answer) {
        return user.id === answer.question_user_id;
    },

    deleteQuestion (user, question) {
        return user.id === question.user.id && question.answers_count < 1;
    }
}