interface User {
    readonly dbId: number,
    name: string,
    email: string,
    googleId?: string,
    startTrial: ()=> string
}

// const kalpa: User = {dbId: 12353, name: 'kj', email: 'kj@meta.com',
//     startTrial: ()=>{
//         return "Trial started"
//     }
// }

// inhertance
interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

const kalpa: Admin = {dbId: 12353, name: 'kj', email: 'kj@meta.com',
    startTrial: ()=>{
        return "Trial started"
    },
    role: 'admin'
}

export {}