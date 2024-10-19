import actionTypes from '../actions/actionTypes';

const initialState = {
     isLoadingGender: false,
     genders: [],
     roles: [],
     positions: []

}

const adminReducer = (state = initialState, action) => {
     switch (action.type) {
          case actionTypes.FETCH_GENDER_START:
               // let copyState = {...state}
               state.isLoadingGender = true;
               return {
                    ...state,
               }

          case actionTypes.FETCH_GENDER_SUCCESS:

               state.genders = action.data
               state.isLoadingGender = false;
               return {
                    ...state,
               }

          case actionTypes.FETCH_GENDER_FAILDED:

               state.isLoadingGender = false;
               state.genders = []
               return {
                    ...state,
               }
          case actionTypes.FETCH_POSITION_SUCCESS:

               state.positions = action.data
               return {
                    ...state,
               }

          case actionTypes.FETCH_POSITION_FAILDED:

               state.positions = []
               return {
                    ...state,
               }
          case actionTypes.FETCH_ROLE_SUCCESS:

               state.roles = action.data
               return {
                    ...state,
               }

          case actionTypes.FETCH_ROLE_FAILDED:

               state.roles = []
               return {
                    ...state,
               }

          // case actionTypes.USER_LOGIN_SUCCESS:
          //      return {
          //           ...state,
          //           isLoggedIn: true,
          //           userInfo: action.userInfo
          //      }
          default:
               return state;
     }
}

export default adminReducer;