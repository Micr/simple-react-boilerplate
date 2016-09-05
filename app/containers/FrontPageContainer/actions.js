
const initLogin = () => ({
  type: 'INIT_LOGIN',
});

const adminLogin = () => (dispatch) => {
  dispatch(initLogin);
  return fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      name: 'admin',
      password: '123',
    }),
  })
  .then(response => response.json());
};

export { adminLogin };
