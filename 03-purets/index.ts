// class User {
//     public name: string
//     private email: string
//     readonly city: string = 'jaipur'
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }

// class User {
//     readonly city: string = 'jaipur'
//     constructor(public name: string,
//          public email: string,
//          private userId: string
//         ) {}
// }

// getter and setter
class User {
    protected _courseCount: number = 1

    readonly city: string = 'jaipur'
    constructor(public name: string,
         public email: string,
         private userId: string
        ) {}

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum: number) {
        if(courseNum<=1) {
            throw new Error('courseCount must be greater that 1');
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(courseNum: number): void {
        this._courseCount = courseNum
    }
}

const kalpa = new User('kj', 'kj@google.com', '8euitj1253')
console.log(kalpa.email)

export{}