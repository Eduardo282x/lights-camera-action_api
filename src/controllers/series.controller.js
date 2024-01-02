import {getConnection} from '../database/database'

const tableName = 'series';

const getSeries = async(req, res) => {
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

const markSeries = async (req,res) => {
    try{
        const { Id_Series, Seen } = req.body;
        const connection = await getConnection();
        const exec = await connection.query(`update ${tableName} set Seen = ${Seen} where Id_Series = ${Id_Series}`);
        const result = await connection.query(`Select * from ${tableName} where Id_Series = ${Id_Series}`);
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error Obteniendo datos');
    }
}

export const methods = {
    getSeries,
    markSeries
};