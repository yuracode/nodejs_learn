// 接続（Pool）を1つ作り、ほかのファイルから使えるようにする
require("dotenv").config();
const { Pool } = require("pg");

// 接続情報（PGHOST、PGUSER、PGPASSWORD、PGDATABASE など）は、環境変数から自動で読まれる
const pool = new Pool();

module.exports = pool;
