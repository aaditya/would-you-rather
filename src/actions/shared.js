import { getInitialData } from "../utils/api";
import { receiveQuestions } from './questions';
import { receiveUsers } from "./users";

export function handleInitialData() {
    return async (dispatch) => {
        const { users, questions } = await getInitialData();
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
    };
}
