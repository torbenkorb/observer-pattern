class Publisher {

    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(observer => observer != fn);
    }

    notifiy(data) {
        this.observers.forEach(observer => observer(data));
    }
}

function log(item) {
    console.log(item);
}

function warning(item) {
    alert(item);
}

var Observer = new Publisher();

Observer.subscribe(log);
Observer.subscribe(warning);

Observer.notifiy('Data sent!');

