const pg = require('pg');

const config = {
  user: 'zkvlrtxdewoysq', //env var: PGUSER
 database: 'ddlpt8kvvr5iii', //env var: PGDATABASE
 password: 'c88fdf454673c0f80a30a1b85b10a9b89f3080f26936734a624226f7da7a1c8d', //env var: PGPASSWORD
 host: 'ec2-107-22-244-62.compute-1.amazonaws.com', // Server hosting the postgres database
 port: 5432, //env var: PGPORT
 ssl:true,
 max: 10, // max number of clients in the pool
 idleTimeoutMillis: 1000 // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);

const queryDB = (sql, arrayData) => (
    new Promise((resolve, reject) =>{
         pool.connect((err,client,done)=>{
             if(err) reject(err +'');
             client.query(sql,arrayData, (errQuery, result)=>{
                 done(errQuery);
                 if(errQuery) return reject(errQuery);
                 return resolve(result);
             })
         })
    })
)

module.exports = {queryDB};