const initialState = [
  {
    id: 'fakeId0',
    text: '學會  React',
    done: true,
  },
  {
    id: 'fakdId1',
    text: '年薪百萬',
    done: false,
  },
];
let id = 0;
export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      id += 1;
      const newState = state.concat({
        id: id.toString(),
        text: action.text,
        done: false,
      });
      return newState;
    }
    case 'TOGGLE_TODO': {
      const newList = state.map((item) => {
        if (item.id === action.id) {
          return {
            id: item.id,
            text: item.text,
            done: !item.done,
          };
        }
        return item;
      });
      return newList;
    }
    default:
      return state;
  }
}
