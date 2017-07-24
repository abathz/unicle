import { SIGN_IN } from 'actions/const'

export default function (state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.payload
  }
  return state
}
