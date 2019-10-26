import { observable } from 'mobx';
import markers from './Markers';

class Store {
  @observable markers = markers;
}


export default Store;
