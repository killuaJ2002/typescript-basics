// abstract class
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepia(): void
    getReeltime(): number{
        return 5
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        
    }
}

const kp = new Instagram('test', 'test', 5);
kp.getReeltime();

export {}