import { SayHelloProps } from "./types";

export function sayHello({firstName,lastName,age} : SayHelloProps){
    console.log('Hello!');
    console.log(`your first name is ${firstName}`);

    if(lastName){
        console.log(`your last name is ${lastName}`)
    }

    if (age) {
        console.log(`your age is ${age}`)
    }

}