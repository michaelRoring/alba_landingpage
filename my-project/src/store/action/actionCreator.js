const BASE_URL = "https://reqres.in";

export const login = payload => {
  console.log("payload :", payload);
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw await res.text();
      }

      const response = await res.json();
      //   console.log("response :", response);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchEva = id => {
  return async dispatch => {
    try {
      const res = await fetch(`${BASE_URL}/api/users/${id}`);

      if (!res.ok) throw await res.text();

      const response = await res.json();
      console.log("response :", response);

      dispatch({
        type: "fetchEvaSuccess",
        payload: response,
      });
      return response;
    } catch (err) {
      console.log(err);
    }
  };
};
