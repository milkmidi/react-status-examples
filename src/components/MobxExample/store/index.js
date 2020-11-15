import { MobXProviderContext } from 'mobx-react';
import { useContext } from 'react';

import CountStore from './CountStore';
import TodoStore from './TodoStore';

export type Store = {
  count: CountStore;
  todo: TodoStore;
}

export default {
  count: new CountStore(),
  todo: new TodoStore(),
};

export function useStoreContext() {
  return useContext(MobXProviderContext).store;
}
