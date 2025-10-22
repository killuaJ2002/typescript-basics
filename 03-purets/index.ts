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
    readonly city: string = 'jaipur'
    constructor(public name: string,
         public email: string,
         private userId: string
        ) {}
    get getAppleEmail(): string {
        return `apple${this.email}`
    }
}

const kalpa = new User('kj', 'kj@google.com', '8euitj1253')
console.log(kalpa.email)

export{}