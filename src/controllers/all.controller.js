import { getConnection } from '../database/database';

const getAll = async(req, res) => {
    try{
        const connectiondb = await getConnection();
        const result = await connectiondb.query(`select Name,Seen from movies union select Name,Seen from series UNION SELECT Name,Seen from anime;`)
        res.json(result)
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error Obteniendo datos');
    }
}

export const methods = {
    getAll,
};