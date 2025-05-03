<div align="center">

<!--
  SVG header
  assets/header.svg に配置されたロゴをインラインで読み込む場合は以下を参照
  <img src="assets/header.svg" width="100%" />
-->

# ✨ ts-discord-bot

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord.js"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node"/>

</div>

> **ts-discord-bot** は **TypeScript + discord.js v14** で実装されたシンプルな Discord ボットのスターターテンプレートです。  
> コマンド登録・イベントハンドリング・環境変数設定など、最低限必要な構成を備えています。

---

## 🗒️ 目次
- [主な機能](#主な機能)
- [動作環境](#動作環境)
- [インストール](#インストール)
- [環境変数の設定](#環境変数の設定)
- [実行方法](#実行方法)
- [コマンド一覧](#コマンド一覧)
- [ディレクトリ構成](#ディレクトリ構成)
- [ライセンス](#ライセンス)

## 主な機能
| 機能 | 説明 |
| ---- | ---- |
| `!ping` | **Pong!** と応答 |
| `!help` | 利用可能なメッセージコマンド一覧を表示 |
| イベント処理 | `ready`, `messageCreate`, `interactionCreate` を実装済み |
| logger | シンプルなロガー (`src/utils/logger.ts`) を同梱 |

> 💡 **Slash Command** 対応は未実装ですが、コマンド登録ロジックは拡張可能な構成になっています。

## 動作環境
- Node.js **16.9.0 以上**  
- npm または pnpm / yarn  
- Discord Bot アカウント & トークン  
- （必要に応じて）OpenAI / GitHub Token など

## インストール
```bash
git clone https://github.com/Sunwood-ai-labs/ts-discord-bot.git
cd ts-discord-bot

# 依存パッケージをインストール
npm install        # or pnpm install / yarn install
```

## 環境変数の設定
1. テンプレートをコピー  
   ```bash
   cp .env.example .env
   ```
2. `.env` を開き、以下を設定  
   | 変数 | 用途 |
   |------|------|
   | `DISCORD_TOKEN` | Discord Bot トークン |
   | `PREFIX` | メッセージコマンドのプレフィックス（デフォルト: `!`） |
   | その他 | `.env.example` 内のコメントを参照 |

## 実行方法
### 開発モード
ホットリロード付きで TypeScript を直接実行します。
```bash
npm run dev
```
`src/` 以下を保存すると自動で再起動します。

### 本番モード
1. ビルド  
   ```bash
   npm run build
   ```
2. 起動  
   ```bash
   npm start
   ```

## コマンド一覧
| コマンド | 概要 |
| -------- | ---- |
| `npm run dev`   | ts-node-dev で開発サーバー起動 |
| `npm run build` | tsc で `dist/` へトランスパイル |
| `npm start`     | `node dist/index.js` で Bot 起動 |

## 💬 チャット上での使い方

ボットがサーバーに参加し、オンラインになったらテキストチャンネルで以下のように入力してみてください。  
デフォルトの **プレフィックスは \`!\`** です（.env の `PREFIX` で変更可能）。

| 入力例 | 反応 | 説明 |
| ------ | ---- | ---- |
| `!ping` | `Pong!` | 疎通確認コマンド |
| `!help` | `Available commands: ping, help` | 利用可能なメッセージコマンドを一覧表示 |

> ❗ ボットをメンションする必要はありません。先頭にプレフィックスを付けるだけで OK です。

### プレフィックスを変更したい場合
1. `.env` の `PREFIX` を好きな文字列に変更  
2. ボットを再起動

### Slash Command について
現時点ではメッセージベースのコマンドのみ対応しています。  
**Slash Command** を追加する場合は、`src/commands/` にスラッシュ用モジュールを作成し、Discord API への登録処理を別途実装してください。
## ディレクトリ構成
```text
ts-discord-bot/
├── src/
│   ├── commands/             # メッセージコマンド
│   ├── events/               # Discord イベント
│   ├── utils/                # 補助モジュール
│   ├── config.ts             # .env 読み込み & 共通設定
│   └── index.ts              # エントリーポイント
├── dist/                     # ビルド後出力（gitignore）
├── .env.example              # 環境変数サンプル
├── tsconfig.json             # TypeScript 設定
└── package.json
```

## ライセンス
MIT License
