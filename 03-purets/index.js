"use strict";
// class User {
//     public name: string
//     private email: string
//     readonly city: string = 'jaipur'
//     constructor(name: string, email: string) {
//         this.name = name;
//         this.email = email;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class User {
//     readonly city: string = 'jaipur'
//     constructor(public name: string,
//          public email: string,
//          private userId: string
//         ) {}
// }
// getter and setter
var User = /** @class */ (function () {
    function User(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = 'jaipur';
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var kalpa = new User('kj', 'kj@google.com', '8euitj1253');
console.log(kalpa.email);
