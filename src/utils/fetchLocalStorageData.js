export const fetchUser = () =>{
    const userInfo = localStorage.getItem('users') !== "undefined" ?
    JSON.parse(localStorage.getItem('user'))
    :localStorage.clear();

    return userInfo;
};