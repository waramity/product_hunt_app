import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';


// {
// entites: {
//   products: {
//     byId: {

//     }
//     allIds: []
//   }

//   viewedUser: {

//   }

//   comments: {
//     byId: {

//     }
//     allIds: []
//   }
// }

//   ui {
//     viewedUser: 19
//     viewedProduct: 61
//   }

//   session: {

//   }
//   errors: {
//     session: []
//     product: []
//   }
// }

const rootReducer = combineReducers({
    entities: entitiesReducer,
    ui: uiReducer,
    session: sessionReducer,
    errors: errorsReducer
});

export default rootReducer;