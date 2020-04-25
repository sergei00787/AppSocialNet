import * as axios from 'axios';

let instanceAxios = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "bcb971f4-bdbf-4eeb-8ecd-aa42107df5c0" }
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
  
}

export let profileApi = new ProfileAPI();
export let usersApi = new UsersAPI();
