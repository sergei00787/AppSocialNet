import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';


class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  getUsers = (count, pageNum) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${pageNum}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  }

  getUsersTotalCount = () => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsersTotalCount(response.data.totalCount);
        this.getPageCount(response.data.totalCount, this.props.usersInPageCount);
      })
  }

  getPageCount = (usersTotalCount, usersInPageCount) => {
    let pageCount = Math.ceil(usersTotalCount / usersInPageCount);
    this.props.setPageCount(pageCount);
  }

  onPageClick = (page) => {
    this.props.setCurentPage(page);
  }

  componentDidMount() {
    this.getUsersTotalCount();
    this.getUsers(this.props.usersInPageCount, 1);
  }



  render() {

    let pages = [];
    for (let i = 1; i <= this.props.pageCount; i++) {
      pages.push(i);
    }

    return (

      <div className="userswrap">
        <div>{this.props.usersTotalCount === 0 ? null : `Всего пользователей: ${this.props.usersTotalCount}`}</div>
        <div>{this.props.pageCount === 0 ? null : `Всего страниц: ${this.props.pageCount}`}</div>

        <div className={style.pageNumConteiner}>
          {
            pages.map(p => {
              return <span className={`${style.pageItem} ${this.props.currentPage === p ? style.currentPage : ""} `}
                onClick={
                  () => {
                    this.props.setCurrentPage(p); 
                    this.getUsers(this.props.usersInPageCount, this.props.currentPage);
                  }
                }>{p}</span>
            })
          }
        </div>



        {
          this.props.users.map(u =>
            <div key={u.id} className={style.userselement}>
              <div>
                <img className={style.smallAva} src={u.photos.small != null ? u.photos.small : "https://social-network.samuraijs.com/activecontent/images/users/7049/user-small.jpg?v=1"} alt="" />
                <img src={u.photos.large} alt="" />
                {u.followed
                  ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                  : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
              </div>
              <div>
                <div>Name: {u.name}</div>
                <div>STATUS: {u.status}</div>
                <div>{u.uniqueUrlName}</div>
              </div>
            </div>
          )
        }
      </div>
    )
  }

}

export default Users;