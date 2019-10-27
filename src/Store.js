import { observable, computed, action, toJS } from 'mobx';
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

try{
    // Create WebSocket connection.
    // const socket = new WebSocket('ws://localhost:8080');
    const socket = new WebSocket('ws://615b01ba.ngrok.io/ws/livedata');
    
    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log("ws open!");
        socket.send('Hello Server!');
    });
    
    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', JSON.parse(event.data));
    });

}catch(e){}

class Store {

    @observable show = observable.map({
        red: true,
        green: true,
        orange: true
    });

    @action
    toggle(color){
        this.show.set(color, !this.show.get(color));
    }

    @observable cleant = cleant;

    @computed get markers(){
        console.log(this.show);

        const filters = Object.keys(toJS(this.show)).filter(k => this.show.get(k));
        return this.cleant.filter(m => filters.includes(m.status));
    }

    @observable zones = cleantZones;
    @observable selected = null;
    @observable hover = null;

    @computed get red(){
        return this.cleant.filter(m => m.status == "red").length;
    }
    @computed get orange(){
        return this.cleant.filter(m => m.status == "orange").length;
    }
    @computed get green(){
        return this.cleant.filter(m => m.status == "green").length;
    }
}

export default Store;
