import { createActions, handleActions } from "redux-actions";

interface AuthState {
    token: string | null;
    loading: boolean;
    error: Error | null;
}

const initialState:AuthState = {
    token: null,
    loading: false,
    error: null,
}

const prefix = 'my-books/auth';

// 액션 생성자
// 타입 앞에 prefix가 붙게됨
export const { pending, success, fail } = createActions(
    "PENDING", 
    "SUCCESS", 
    "FAIL", 
    { prefix }
);

const reducer = handleActions<AuthState, string>({
    PENDING: (state) => ({
        ...state,
        loading: true,
        error: null,
    }),

    // action의 payload로 token이 들어옴
    SUCCESS: (state, action) => ({
        token: action.payload,
        loading: false,
        error: null,
    }),
    FAIL: (state, action: any) => ({
        ...state,
        loading: false,
        error: action.payload,
    })
}, initialState, {prefix});

export default reducer;

// saga
export const authSaga = () => {
    
}