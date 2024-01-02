import {getConnection} from '../database/database'
const tableName = 'anime';

const getAnimes = async(req, res) => {
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

const markAnime = async (req,res) => {
    try{
        const { Id_Anime, Seen } = req.body;
        const connection = await getConnection();
        const exec = await connection.query(`update ${tableName} set Seen = ${Seen} where Id_Anime = ${Id_Anime}`);
        const result = await connection.query(`Select * from ${tableName} where Id_Anime = ${Id_Anime}`);
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error Obteniendo datos');
    }
}

export const methods = {
    getAnimes,
    markAnime
};