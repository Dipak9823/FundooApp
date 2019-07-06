export interface User {
    name: {
        firstname: string;
        lastname: string;
    }
    username: string;
    email: string;
    password: string;
    phone_number: Number;
    address: {
        street: string;
        city: string;
        state: string;
        zipcode: number;
    }
}

