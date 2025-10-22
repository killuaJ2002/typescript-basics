function identityOne(val: number | string): number | string {
    return val
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

function identityFour<T> (val: T): T {
    return val;
}

function getProduct<T>(products: T[]): T {
    const myIdx = 2;
    return products[myIdx];
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database> (valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(2, {connection: 'aklsjdf', username:"sdjlkfj", password: 'kjsdkjfklj'})

interface Quiz {
    name: string,
    type: string
}

interface course {
    name: string,
    author: string,
    subject: string
}

class sellable<T> {
    public cart: T[] = []
    
    addToCart(product: T) {
        this.cart.push(product);
    }
}