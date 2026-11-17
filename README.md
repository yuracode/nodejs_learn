# Node.js 演習（全16回）

Node.js を使ったプログラミングと Web アプリケーション開発を学ぶ、全16回の演習教材です。

JavaScript の基本文法の復習から始め、インターネット上の公開 API からのデータ取得（`fetch`）、Express と EJS による Web システム開発、PostgreSQL を使ったデータベース連携までを段階的に学びます。

- **教科書**：伊藤康太『実践Node.js入門 ―基礎・開発・運用』（技術評論社）
  - 授業の回と教科書の章・節の対応は [textbook-map.md](textbook-map.md) にまとめています（各回の教材の冒頭にも載せています）。

---

## 全体の流れ

| 区分 | 回 | ねらい・題材 |
|---|---|---|
| **前半A** | 第1〜4回 | 基本文法の丁寧な復習（変数・条件分岐・繰り返し・関数・配列とJSON・アロー関数） |
| **前半B** | 第5〜8回 | 分割代入、非同期処理（Promise・`async/await`）、`fetch` で公開 API を使うプログラム |
| **中盤** | 第9〜14回 | Express＋EJS で「超簡単掲示板」を作る、フォーム処理、REST API |
| **後半** | 第15〜16回 | PostgreSQL に接続し、「超簡単掲示板」のデータをデータベースに保存する |

---

## 各回の教材一覧

回をクリックすると、その回の教材（`README.md`）が開きます。

| 回 | テーマ | 主な内容 | 教科書 |
|---|---|---|---|
| **前半A** | **基本文法の復習** | | |
| [第1回](lessons/01-basics1/README.md) | 基本文法①　変数・型・条件分岐・繰り返し | `node` での実行、`const` / `let`、テンプレートリテラル、`if`、`===`、`for` / `while` | 1.1、1.2、2.1、2.2 |
| [第2回](lessons/02-functions/README.md) | 基本文法②　関数の定義と呼び出し | `function`、引数と戻り値、`return` と `console.log` の違い、スコープ | 2.2 |
| [第3回](lessons/03-array-object-json/README.md) | 配列（リスト）・オブジェクト・JSON | 配列、`for...of`、オブジェクト、オブジェクトの配列、`JSON.parse` / `JSON.stringify` | 2.2 |
| [第4回](lessons/04-arrow-functions/README.md) | アロー関数と「関数を渡す」 | 関数式、`=>` の書き換え、コールバック関数、`forEach` / `map` / `filter` / `find` | 2.2、2.5 |
| **前半B** | **一歩進んだ文法と非同期・fetch** | | |
| [第5回](lessons/05-destructuring/README.md) | 分割代入・スプレッド構文と配列メソッドの応用 | オブジェクト・配列・引数の分割代入、`...`（スプレッド構文）、`reduce`、メソッドの連結 | 2.5 |
| [第6回](lessons/06-callback-promise/README.md) | 非同期処理①　コールバックとPromise | 同期と非同期、`setTimeout`、Promise、`then` / `catch` | 4.1〜4.3 |
| [第7回](lessons/07-async-await-fetch/README.md) | 非同期処理②　async/await と fetch 入門 | `async` / `await`、`try` / `catch`、`fetch` と `res.json()`、ストリーム、`res.ok` | 4.4、4.5、4.7 |
| [第8回](lessons/08-fetch-project/README.md) | fetch で作る面白プログラム（ミニ制作） | `process.argv`、公開 API（郵便番号・PokeAPI・天気・Dog API）を使ったミニ制作【前半の到達確認】 | 補足資料 |
| **中盤** | **ExpressとEJSによるWebシステム** | | |
| [第9回](lessons/09-modules-express/README.md) | モジュールとnpm、はじめてのExpress | `require` / `module.exports`、`npm install`、`app.get`、`req.params`、`req.query` | 3.1、3.4、3.5、6.1、6.2 |
| [第10回](lessons/10-ejs-basics1/README.md) | EJS基礎①　テンプレートに値を渡す | `views` フォルダ、`res.render`、`<%= %>` と `<%- %>`（エスケープ） | 6.5 |
| [第11回](lessons/11-ejs-basics2/README.md) | EJS基礎②　条件分岐と繰り返し | `<% %>` での `if` と `forEach`、一覧表の表示、`res.redirect`（302） | 6.5 |
| [第12回](lessons/12-ejs-basics3/README.md) | EJS基礎③　部品化と静的ファイル | `include`（ヘッダー・フッターの共通化）、`express.static`（CSS）、詳細ページ `/posts/:id` | 6.5、6.6 |
| [第13回](lessons/13-forms/README.md) | フォーム処理 | `POST`、`express.urlencoded`、`req.body`、入力チェック（400）、PRG パターン | 6.2 |
| [第14回](lessons/14-rest-api/README.md) | REST API | REST の考え方、`res.json`、`express.json`、ステータスコード、ブラウザの `fetch`【中盤の到達確認】 | 6.2、6.3 |
| **後半** | **PostgreSQL** | | |
| [第15回](lessons/15-postgresql-crud/README.md) | PostgreSQLへの接続とCRUD | `pg`（`Pool`）、`.env`、`SELECT` / `INSERT` / `UPDATE` / `DELETE`、プレースホルダ（`$1`） | 補足資料 |
| [第16回](lessons/16-bbs-db/README.md) | 超簡単掲示板のDB化 | 保存先を配列から PostgreSQL に置き換える、`posts.js`、`express.Router` によるファイル分割 | 6.7、6.8 |

---

## フォルダの構成と使い方

各回の教材は `lessons/` フォルダの中に入っています。毎回同じ構成になっています。

```text
lessons/
  01-basics1/
    README.md      … 授業で読む教材（ゴール・解説と例題・図を読む問題・演習・まとめ）
    examples/      … 例題の完成コード（そのまま動きます）
    exercises/     … 演習で使うひな形やデータファイル（ある回のみ）
```

1. **各回の教材（`README.md`）の構成**
   1. **今日のゴール**：その回でできるようになること
   2. **教科書の該当節**：あわせて読む教科書の場所
   3. **前回のふりかえり**：短い確認問題（第1回は「これまでのふりかえり」）
   4. **解説と例題**：小さく区切った解説と、動かして確かめる例題・シーケンス図
   5. **図を読む問題**：シーケンス図の流れを追う問題
   6. **演習（基本）**：全員が解く基本問題
   7. **演習（発展）**：基本が終わった人向けの応用問題
   8. **まとめ**：その回のキーワードと次回の予告
2. **`examples/` フォルダの使い方**
   - 自分で入力したプログラムがうまく動かないときに、完成コードと見比べるために使います。
   - 第10〜16回の `examples/bbs/` には、その回の終わりの状態の「超簡単掲示板」が入っています。

---

## 準備と動かし方

### 1. 必要な環境

- **Windows** ＋ **VS Code**
- **Node.js**（v24 系）：ターミナルで `node --version` を実行し、`v24` で始まる番号が出れば準備できています。
- **VS Code 拡張機能「Markdown Preview Mermaid Support」**：
  - 教材の中のシーケンス図を VS Code で表示するために使います（GitHub 上で読む場合はそのままで表示されます）。
  - VS Code で教材（`README.md`）を開き、`Ctrl + Shift + V` を押すと図入りのプレビューが開きます。
- **PostgreSQL**（第15回以降で使用）：データベース `node_bbs` を作っておきます。

### 2. プログラムの実行（第1〜8回）

VS Code の「ターミナル」→「新しいターミナル」を開き、プログラムのあるフォルダに移動してから `node` コマンドで実行します。

```powershell
cd lessons/01-basics1/examples
node hello.js
```

### 3. サーバーの起動と停止（第9〜16回）

Express を使う回（第9回以降）の例題を動かすときは、まず `package.json` があるフォルダに移動して `npm install` を実行します（初回のみ）。

```powershell
cd lessons/10-ejs-basics1/examples/bbs
npm install
node app.js
```

- 起動したら、ブラウザで `http://localhost:3000` を開きます。
- **サーバーを止めるとき**：ターミナルで `Ctrl + C` を押します。
- **プログラム（`.js`）を書き換えたとき**：`Ctrl + C` で一度止めてから、もう一度 `node app.js` で起動し直します（`.ejs` や `.css` だけを変えたときは、保存してブラウザを再読み込みすれば反映されます）。

### 4. データベースを使う回（第15・16回）

第15・16回では、PostgreSQL に接続します。

```powershell
cd lessons/16-bbs-db/examples/bbs
npm install
copy .env.example .env
```

1. コピーして作った `.env` を開き、`PGPASSWORD=` の後ろを自分の PostgreSQL のパスワードに書き換えて保存します。
   - **注意**：パスワードを書いた `.env` は、絶対に Git にコミットしないでください（`.gitignore` で除外されています）。
2. テーブルを作成してから実行します。

```powershell
node init-db.js
node app.js
```

---

## この授業での書き方のルール

授業を通して迷わず書けるように、次のルールに統一しています。

- **モジュールの読み込みは `require` に統一する**
  - `const express = require("express");`、`module.exports = ...`（CommonJS 方式）を使います。
  - ネットの記事などで `import ... from ...` を見かけたときは、[第9回の読み替え表](lessons/09-modules-express/README.md)を見て `require` に直して使います。
- **サーバーの起動は `node app.js` に統一する**
  - `npm run dev` は使いません。
- **`await` は `async` を付けた関数の中に書く**
  - 第7回・第8回では `async function main() { ... } main();` の定型を使います。
- **「等しい」はいつも `===` を使う**
  - `==` は思わぬ結果になるため使いません。
- **安全のためのルール（Web・データベース）**
  - 人が入力した文字を画面に出すときは、EJS では **`<%= %>`**、ブラウザの JavaScript では **`textContent`** を使います（`<%- %>` や `innerHTML` は使いません）。
  - SQL に値を入れるときは、文字列を直接つなげず、必ず **`$1`、`$2`（プレースホルダ）** を使います。
