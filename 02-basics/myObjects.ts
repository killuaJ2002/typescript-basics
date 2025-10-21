// function createUser({name, isPaid}: {name: string, isPaid: boolean}) {}

// createUser({name: "kalpa", isPaid: true})

function createCourse():{name: string, price: number} {
    return {name: 'kalpa', price: 399}
}

type User = {
    name: string,
    email: string,
    isActive: boolean
}

const createUser = (user: User): User=> {
    return {name: "", email: "", isActive: true};
}

export{}