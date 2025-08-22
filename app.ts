console.log('Hola')

type User = {
id : number;
name : string;
email : string;
}

const user: User = {
    id: 1,
    name:'Mario',
    email: 'example@gmail.com',
} 

function getUser(id: number): User | undefined{
        console.log('Fetching user with ID: ${id}');
    if(id === user.id){
        return user;
    }
    return undefined; 
    console.log('Fetching user with ID: ${id}');
} 