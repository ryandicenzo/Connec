import { ACTION_SET } from './actions';

const defaultState = {
  name: '',
  avatar: 'https://www.gravatar.com/avatar/x?d=mp'
};

const profile = (state = defaultState, action) => {
  switch(action.type) {
    case ACTION_SET:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
};


export default profile;
