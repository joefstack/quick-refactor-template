import { SWITCH_PAGES } from "redux/types";

const initialState = {
  pageRoute: {
    landing: false,
    blogs: false,
    blog: false
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SWITCH_PAGES:
      return {
        ...state,
        pageRoute: action.payload
      };
    default:
      return state;
  }
}
