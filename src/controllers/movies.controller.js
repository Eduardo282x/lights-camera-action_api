import {getConnection} from '../database/database'

const tableName = 'movies';

const getMovies = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query(`Select * from ${tableName}`)
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error Obteniendo datos');
    }
}

const markMovies = async (req,res) => {
    try{
        const { Id_Movies, Seen } = req.body;
        const connection = await getConnection();
        const exec = await connection.query(`update ${tableName} set Seen = ${Seen} where Id_Movies = ${Id_Movies}`);
        const result = await connection.query(`Select * from ${tableName} where Id_Movies = ${Id_Movies}`);
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error Obteniendo datos');
    }
}

export const methods = {
    getMovies,
    markMovies
};