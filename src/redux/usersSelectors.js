export const getUsers = (state) => {
    return state.UsersState.users;
}

export const getUserTotalCount = (state) => {
    return state.UsersState.usersTotalCount;
}

export const getUserPageCount = (state) => {
    return state.UsersState.pageCount;
}

export const getUserPage = (state) => {
    return state.UsersState.currentPage;
}

export const getUsersInPageCount = (state) => {
    return state.UsersState.usersInPageCount;
}

export const getIsFetching = (state) => {
    return state.UsersState.isFetching;
}

export const getFetchingFollowerList= (state) => {
    return state.UsersState.fetchingFollowerList;
}
