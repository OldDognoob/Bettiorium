export function updateSignUp(state, payload) {
    return {
      ...state,
      signUp: { ...payload }
    };
  }