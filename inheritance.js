class TeamMember {
    name;
    role = 'Support Web Dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {

    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }

    startSession() {
        console.log(this.name, "Start a session");
    };

}

class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'start a session', student);
    }
}

const alia = new Support('alia', 'dubai', 12);
console.log(alia);