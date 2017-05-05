class UserController {

  getUser() {
    return new Promise((resolve, reject) => {
      new ServiceAidBackHttpRequest().getUser()
        .then(loggedUser => {
          resolve(JSON.parse(loggedUser));
        })
        .catch(response => {
          if (response === 401) {
            window.location.href = 'http://localhost:8080/login.html';
          } else {
            window.location.href = 'http://localhost:8080/error.html';
          }
        })
    })
  }

}