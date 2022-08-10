# osakana-nazono-katakana

## Installation

1. run make init
2. run make watch_api
3. run run_app_with_api
4. yarn dev

番外：make が使えない場合も書かれています。

## 0. CosmosDB との接続情報を配置する。

`api/local.settings.json`を作成してください。内容は @yukinissie に聞いてください。

## 1. run make init

git clone したらプロジェクトのルートで以下のコマンドを打ちます。

```sh
make init
```

ルートと api ディレクトリにある package.json に従って yarn install されます。
package.json が更新されるたびに実行するといいでしょう。

## 2. run make watch_api

次に以下のコマンドを実行します。

```sh
make watch_api
```

コードの変更があるたびにリビルドしてくれます。ビルド後の成果物は 3.のエミュレーターや本番上で使われます。以下のログが出力されれば成功しています。（開発を終えるまでは止めないでください）

```
Found 0 errors. Watching for file changes.
```

## 3. run make run_app_with_api

2.とは別のターミナル（端末）を開きます。そして以下のコマンドを実行します。

```sh
make run_app_with_api
```

## 4. yarn dev

yarn dev で開発サーバーを起動します。

```
yarn dev
```

React: http://localhost:5173
API: http://localhost:7071

## 番外 make が使えない場合

プロジェクトのルートで以下を実行します。

```sh
chmod +x ./cmd/*
./cmd/init
./cmd/watch_api
```

別のターミナルを開いて以下を実行

```sh
./cmd/run_app_with_api
```

yarn dev で開発サーバーを起動します。

```
yarn dev
```

React: http://localhost:5173
API: http://localhost:7071
