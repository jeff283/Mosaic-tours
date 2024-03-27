interface Room {
    id?: string;
    roomType: string;
    capacity: number;
    size: number;
    bedType: string;
    gender: string;
    price:number;
    occupants?: string[];


}

export default Room;
