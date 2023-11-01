import api from "../api";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function getTest() {

    return async (dispatch) => {
        try {
            dispatch({ type: "GET_REQUEST" });
            const testApi = api.get(`abandonmentPublicSrvc/sido?numOfRows=3&pageNo=1&serviceKey=${API_KEY}&_type=json`)

            let [test] = await Promise.all([testApi])

            dispatch({
                type: "GET_DATA",
                payload: {
                    test: test.data,
                }
            });
        } catch (error) {
            dispatch({ type: "GET_FAILURE" })
        }
    }
}

export const Action = {
    getTest
}