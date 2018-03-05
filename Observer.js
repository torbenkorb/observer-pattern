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

function log(data) {
    console.log(`Observer #1: ${data}`);
}

function anotherLog(data) {
    console.log(`Observer #2: ${data}`);
}

var Observer = new Publisher();

Observer.subscribe(log);
Observer.subscribe(anotherLog);

Observer.notifiy('Data sent!');
