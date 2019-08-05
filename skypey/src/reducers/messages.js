import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";
import _ from "lodash";

export default function messages (state = getMessages(10), action){
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const allUserMsgs = state[userId];            //grab the active user’s messages
            const number = +_.keys(allUserMsgs).pop() + 1;

            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        default:
            return state;
    }
}

// state here isn’t the overall state object of the application. 
// No. It is the state managed by the reducer for the messages field.