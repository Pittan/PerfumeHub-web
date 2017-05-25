# PerfumeHub-web  
![Logo](https://app.pittankopta.net/pta/info/img/perfumehub-icon.png)  
[![Build Status](https://travis-ci.org/Pittan/PerfumeHub-web.svg?branch=master)](https://travis-ci.org/Pittan/PerfumeHub-web)
[![Coverage Status](https://coveralls.io/repos/github/Pittan/PerfumeHub-web/badge.svg?branch=master)](https://coveralls.io/github/Pittan/PerfumeHub-web?branch=master)
PerfumeHubのWeb版です。プラットフォーム関係なく、ブラウザ上で動作するアプリケーションです。  
このプロジェクトは [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.4 で作成されました。

# 概要
## 今日のPerfume
その日のPerfumeのメディア出演情報を一覧で表示する機能です。  
管理者ユーザになると予定の作成・編集・削除が行えるようになります。  
管理者ユーザーは募集中です。気になる人は(@pittanko_pta)までどうぞ。  

## Ticklir2(作成中)
ライブ参加情報を共有できる機能です。Twitterログインが必須です。

# よくありそうな質問
## iOSのPerfumeHubと何が違うの？
以下にそれぞれの機能あるなしを書きました。

|  | Web | iOS |
|---|:---:|:---:|
| 今日のPerfume | ◯ | △(アプリ内からWebViewで対応) |
| Ticklir(ライブ参加情報共有ポータル) | ◯ | △(アプリ内からWebViewで対応予定) |
| ニュースのプッシュ通知 | - | ◯ |
| P.T.A.のプッシュ通知 | - | ◯ |
| ニュース一覧 | - | ◯ |
| P.T.A.一発アクセス | - | ◯ |
| カラーテーマ | 計画中 | ◯ |

# 開発するためのあれこれ
* node 6.10  
* AngularCLI  
が必要です。インストールしておいてください。

## 開発版サーバを立てる
`node v6.10` 以上が 入っている環境で `ng serve` コマンドを叩くと開発用サーバがローカルで立ちます。  
`http://localhost:4200/` にアクセスして開発中の環境を確認することができます。     
ソースコードに変更を加えると自動的にブラウザがリロードされます。  

開発版を使っている最中には開発用のAPIに接続されます。(environments参照)  
Twitterのログインも開発版のアプリに遷移します。  

## 雛形からコードの生成を行う
`ng generate component component-name` で新しいcomponentを作成できます。  
他に`ng generate directive/pipe/service/class/module`が使えます。  

## コードのチェックを行う
`ng lint`でコードのチェックを行います。通らないとCI上のビルドも通らないので注意してください。

## ビルドを行う
`ng build` でプロジェクトのビルドを行うことができます。 成果物は`dist/`フォルダ内に出力されます。  
`-prod` フラグを有効にするとプロダクション用のビルドを行います。  
`ng serve`では実行時にエラーが出るものも、`-prod`フラグを付けるとビルド時に発見できることがあるので  
PRを出す前に一度ビルドが通ることを確認するといいでしょう。  

## ユニットテストを行う
`ng test` で [Karma](https://karma-runner.github.io) を使ったユニットテストを実行できます。

## end-to-endテストを行う
`ng e2e`で [Protractor](http://www.protractortest.org/) を使ったend-to-endテストを実行できます。  
テストを実行する前に、`ng serve`で開発用のサーバを立ててください。

## 本番デプロイ
masterブランチのコミットはビルドされて自動でデプロイされます。  
`ng build --prod`, `ng lint`, `ng test`が全て通らないとデプロイされないので注意してください。 

## その他ヘルプ
Angualr CLIについてのヘルプは`ng help`または[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)を参照してください。
