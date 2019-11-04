const pg = require('pg');

const pgConfig = {
    user: 'postgres',           // 数据库用户名
    database: 'postgres',       // 数据库
    password: 'postgres',       // 数据库密码
    host: '47.93.43.9',        // 数据库所在IP
    port: '5432'                // 连接端口
};
const pool = new pg.Pool(pgConfig);



function select(sql, callback) {
    pool.connect(function(err, client, done) {
        if (err) {
            callback(err, null);
        } else {
            client.query(sql, function (err, response) {
                done();
                callback(err, response.rows);               //释放链接
            });
        }

    });
}
function insert(sql,value, callback) {
    pool.connect(function(err, client, done) {
        if (err) {
            callback(err, null);
        } else {
            client.query(sql, value,function (err, response) {
                done();
                callback(err, response.rows);               //释放链接
            });
        }

    });
}

module.exports = {
    select: select,
    insert: insert
}