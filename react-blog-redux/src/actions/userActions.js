import {
  retrieveData,
  storeData
} from "../utilies/localStorage";

export const fetchUsers = () => dispatch => {
  const users = retrieveData('users');
  dispatch({
    type: 'FETCH_USERS',
    payload: users
  });
};

export const insertUser = (user, cb) => dispatch => {
  const users = retrieveData('users');
  console.log(users, user);
  if (users !== null && users.length > 0) {
    const mapped_array = users.map(i => parseInt(i.id));
    console.log("mapped",mapped_array);
    const max_id = Math.max(...mapped_array);
    user.id = max_id + 1;
    console.log("Max",max_id)
  } else {
    user.id = 1;
  }
  users.push(user);
  console.log(user);
  storeData('users', users);
  dispatch({
    type: 'ADD_NEW_USER',
    user: user
  });

  cb();
};