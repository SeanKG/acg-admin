import { observable } from 'mobx';
// import markers from './Markers';

import markers from './markers.json';

console.log(markers);


const cleant = markers.map( m => ({
    ...m,
    id: m.name,
    user: {
        id: m.lat,
        phone: m.lng
    }
}));

class Store {
  @observable markers = cleant;
  @observable selected = null;
  @observable hover = null;
}

export default Store;
