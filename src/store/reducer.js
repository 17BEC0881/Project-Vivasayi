import { CREATE_FARMER, DISTRICT, PANCHAYAT, STATE, UNION, VILLAGE } from './action';

 const initialAuthState = {
    farmer: [],
    state: [],
    district: [],
    union: [],
    panchayat: [],
    village:[]
 };

 function authReducer(state = initialAuthState, action) {
   switch (action.type) {
    case CREATE_FARMER:
      return { 
        ...state,
        farmer: [...state.farmer, action.payload]
    }
    case STATE:
      return { 
        ...state,
        state: action.payload,
    }
    case DISTRICT:
      return { 
        ...state,
        district: action.payload,
    }
    case UNION:
      return { 
        ...state,
        union: action.payload,
    }
    case PANCHAYAT:
      return { 
        ...state,
        panchayat: action.payload,
    }
    case VILLAGE:
      return { 
        ...state,
        village: action.payload,
    }
     default:
       return state;
   }
 }

 export default authReducer;