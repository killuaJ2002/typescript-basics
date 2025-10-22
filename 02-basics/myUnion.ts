let score: number | string;
score = 22;
score = '25';

type User = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number,
}

let kalpa: User | Admin = {name: 'kalpa', id: 235};
kalpa = {username: 'kalpajyoti', id:235}

const data1: number[] = [1,3,4];
const data2: string[] = ['adkf', 'adskjf', 'adskf'];
const data3: (string | number)[] = [2,4,5, 'aldjskf', ';kjksjdfk'];