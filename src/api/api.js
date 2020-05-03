import * as axios from 'axios';

let instanceAxios = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "72a60229-0709-4844-9cad-13fdaebb067d" }
})

class UsersAPI {

  getUsers = (usersInPageCount = 10, currentPage = 1) => {
    return instanceAxios.get(`users?count=${usersInPageCount}&page=${currentPage}`)
      .then(response => { return (response.data) });
  }

  getUsersTotalCount = () => {
    return instanceAxios.get("users")
      .then(response => { return (response.data) });
  }

  unfollow = (userId) => {
    return instanceAxios.delete("follow/"+userId)
      .then(response => { return (response.data) });
  }

  follow = (userId) => {
    return instanceAxios.post("follow/"+userId)
      .then(response => { return (response.data) });
  }
}

class ProfileAPI {

  getProfile = (userId) => {
    return instanceAxios.get('profile/'+userId).then(response => {return response.data});
  }

  getProfileStatus = (userId) => {
    return instanceAxios.get('profile/status/' + userId).then(response => {return response.data});
  }

  setProfileStatus = (status) => {
    return instanceAxios.put('profile/status', { status: status });
  }
  
}

class HeaderAPI {
  authMe = () => {
    return instanceAxios.get('auth/me').then(response => {return response});
  }
}


class LoginAPI {
  login = (email,password,rememberMe,captcha) => {
    return instanceAxios.put('/auth/login',{ email, password, rememberMe, captcha})
     .then(response => { return response})
  }
}

export let profileApi = new ProfileAPI();
export let usersApi = new UsersAPI();
export let headerApi = new HeaderAPI();
export let loginApi = new LoginAPI();
