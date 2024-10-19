import actionTypes from '../actions/actionTypes';

const initialState = {
     genders: [],
     roles: [],
     positions: []

}

const adminReducer = (state = initialState, action) => {
     switch (action.type) {
          case actionTypes.FETCH_GENDER_START:
               console.log(">>>Fetch render start!", action)
               return {
                    ...state,
               }

          case actionTypes.FETCH_GENDER_SUCCESS:
               let copyState = { ...state }
               copyState.genders = action.data
               console.log(">>>Fetch render success!", copyState)
               return {
                    ...copyState,
               }

          case actionTypes.FETCH_GENDER_FAILDED:
               console.log(">>>Fetch render fail!", action)
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