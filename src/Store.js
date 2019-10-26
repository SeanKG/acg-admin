import { observable } from 'mobx';
import markers from './Markers';

class Store {
  @observable markers = markers;
  @observable selected = null;
  @observable hover = null;
}

export default Store;
