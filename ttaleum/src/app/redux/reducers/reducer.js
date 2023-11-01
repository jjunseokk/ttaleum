const initialState = {
    // 초기 상태를 정의합니다.
    loading: false,
  };
  
  function reducer(state = initialState, action) {
    let { type, payload } = action
  
    switch (type) {
      case "GET_REQUEST":
        return { ...state, loading: true };
      case "GET_DATA":
        return {
          ...state,
          test: payload.test,
          loading: false,
        }
      default:
        return { ...state }
    }
  }
  
  
  export default reducer;