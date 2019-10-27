import { observable, computed } from 'mobx';
// import markers from './Markers';

import markers from './markers.json';
import zones from './zones.json';

const cleant = markers.map( m => ({
    ...m,
    id: m.name,
    status: ["red", "orange", "green"][Math.floor(Math.random() * Math.floor(3))],
    user: {
        id: m.lat,
        phone: m.lng
    }
}));


const colors = ['blue', 'yellow', 'green', 'orange', 'purple'];
const cleantZones = zones.map( (zone, i) => ({
    ...zone,
    color: colors[i]
}));

class Store {
  @observable markers = cleant;
  @observable zones = cleantZones;
  @observable selected = null;
  @observable hover = null;

  @computed get red(){
      return this.markers.filter(m => m.status == "red").length;
  }
  @computed get orange(){
      return this.markers.filter(m => m.status == "orange").length;
  }
  @computed get green(){
      return this.markers.filter(m => m.status == "green").length;
  }
}

export default Store;
