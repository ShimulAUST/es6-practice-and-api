class Support {
    name;
    role = 'Support Web Dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "Start a session");
    };

}

const aamir = new Support('aamir', 'bd');
const salman = new Support('salman', 'dubai');
aamir.startSession();
console.log(aamir);
console.log(salman);