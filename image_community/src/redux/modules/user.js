import {createAction, handleActions} from 'redux-actions';
import {produce} from "immer";
import {setCookie, getCookie, deleteCookie} from "../../shared/Cookie"
import firebase from "firebase/app"
import {auth} from "../../shared/firebase"
import FullCalendar from '@fullcalendar/react';

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const setUser = createAction(SET_USER, (user) => ({user}));

// initialstate
const initialState = {
    user : null,
    is_login : false,
};

const user_initial = {
    user_name : "yonghyun",
}


// middleware actions
const loginFB = (id, pwd) => {
    return function (dispatch, getState, { history }) {
      auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
        auth
          .signInWithEmailAndPassword(id, pwd)
          .then((user) => {
            dispatch(
              setUser({
                user_name: user.user.displayName,
                id: id,
                user_profile: '',
                uid: user.user.uid,
              }),
            );
            history.push('/');
          })
          .catch((err) => {
            const errCode = err.code;
            const errMessage = err.message;
            console.log(errCode, errMessage);
          });
      });
    };
  };


const signupFB = (id, pwd, user_name) => {
    return function(dispatch, getState, {history}) {

        auth
            .createUserWithEmailAndPassword(id, pwd)
            .then((user) => {
                console.log(user)

                auth.currentUser.updateProfile({
                    displayName : user_name,
                }).then(()=> {
                    dispatch(setUser({user_name : user_name, id : id, user_profile : "", uid : user.user.uid}))
                    history.push("/")
                }).catch((error)=> {
                    console.log(error);
                })
                // signed in
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode, errorMessage);
                // ..
            })

            }
        }

    const loginCheckFB = () => {
        return function (dispatch, getState, {history}){
            auth.onAuthStateChanged((user)=> {
                if(user) {
                    dispatch(
                        setUser({
                            user_name : user.displayName,
                            user_profile : '',
                            id : user.email,
                            uid : user.uid,
                    })
                );

            } else {
                dispatch(logOut());

            }
            })
        }
    }
    
    const logoutFB = () => {
        return function (dispatch, getState, {history}) {
            auth.signOut().then(()=>{
                dispatch(logOut());
                history.replace("/")
            })

        }
    }
// reducer
export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft)=>{
        setCookie("is_login", "success")
        draft.user = action.payload.user; 
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft)=>{
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft)=>{}),
},
initialState
);


// action creator export 

const actionCreators ={ 
    logOut,
    getUser,
    signupFB,
    loginFB,
    loginCheckFB,
    logoutFB
};

export { actionCreators }