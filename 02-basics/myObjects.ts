// function createUser({name, isPaid}: {name: string, isPaid: boolean}) {}

// createUser({name: "kalpa", isPaid: true})

// function createCourse():{name: string, price: number} {
//     return {name: 'kalpa', price: 399}
// }

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// const createUser = (user: User): User=> {
//     return {name: "", email: "", isActive: true};
// }

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: string,
}

let myUser: User = {
    _id: '1344',
    name: 'kalpa',
    email: 'kalpajyoti@google.com',
    isActive: true,
}


export{}