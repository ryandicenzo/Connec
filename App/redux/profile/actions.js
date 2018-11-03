export const ACTION_SET = '@profile/set';

export const set = (data) => {
  return {
    type: ACTION_SET,
    payload: data
  }
}