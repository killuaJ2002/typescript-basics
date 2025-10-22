function detectType(val: number | string) {
    if(typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 23
}

function provideId(id: string | null) {
    if(!id) {
        console.log('enter an id to proceed');
        return;
    }
    id.toLowerCase()
}
