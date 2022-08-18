import { connect } from 'mongoose';

export const starConnection = async () => {
try{
    const db = await connect('mongodb://localhost/projetos-db');
    console.log(db.connection.name);
} catch(error){
    console.log(error);
}
   

}