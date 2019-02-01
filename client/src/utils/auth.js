function getUser() {
  return fetch("http://localhost:8080/api/users/me", {credentials: "same-origin"})
      .then(res => {
        console.log(res);
        if (!res.ok)
          return null;
        return res.json();
      })
      .catch(err => console.log(err))
}

function logout() {
  return fetch("http://localhost:8080/api/auth/logout", {method: 'post', credentials: "same-origin"})
      .then(res => res.ok);
}

export default { getUser, logout }
