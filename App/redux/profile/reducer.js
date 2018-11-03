import { ACTION_SET } from './actions';

const defaultState = {
  name: 'Fake name',
  email: '',
  phone: '911'
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
