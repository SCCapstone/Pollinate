function getUser() {
  return fetch("/api/users/me", {credentials: "same-origin"})
      .then(res => {
        if (!res.ok)
          return null;
        return res.json();
      })
      .catch(err => console.log(err))
}

function logout() {
  return fetch("/api/auth/logout", {method: 'post', credentials: "same-origin"})
      .then(res => res.ok);
}

export default { getUser, logout }
