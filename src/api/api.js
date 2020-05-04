import * as axios from 'axios';

let instanceAxios = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "dd386439-744d-4c39-9ab5-8f358cf58de7" }
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
    return instanceAxios.get('profile/'+userId).then(response => { debugger; return response.data});
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
  login = (email,password,rememberMe = false) => {
    return instanceAxios.post('/auth/login',{ email, password, rememberMe});
  }
  logout = () => {
    return instanceAxios.delete('/auth/login');
  }

}

export let profileApi = new ProfileAPI();
export let usersApi = new UsersAPI();
export let headerApi = new HeaderAPI();
export let loginApi = new LoginAPI();
