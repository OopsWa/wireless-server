const pg = require('pg');

const pgConfig = {
    user: 'admin',           // 数据库用户名
    database: 'postgres',       // 数据库
    password: '123456',       // 数据库密码
    host: '127.0.0.1',        // 数据库所在IP
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
                console.log(err);
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
