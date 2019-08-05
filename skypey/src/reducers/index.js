import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
    user,            // ES6 (object key)user: user(the reducer imported above)
    messages,  
    typing,  
    contacts,
    activeUserId
});