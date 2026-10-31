# MochiLog Web — 開発・運用

公開サイトの利用案内は[README](../README.md)を参照してください。この文書はサイトの改修・検証・Cloudflareへの配信を行う開発者向けです。ルートREADMEには利用者向けの機能と導線を記載し、実装・コマンド・配信履歴はdocs/で管理します。

## 現在の公開先と作業履歴

本番サイトは <https://mochilog.ryuya-dev.net/>、作業ブランチはmainです。過去のREADMEにあった改修ブランチ名・プレビューURLは当時の検証用で、現在の利用者向け入口には使いません。mainへのpushとCloudflareの本番配信は別の操作です。

サイトの表示言語は日本語・英語です。アプリの実装と実際の配信状況を確認して案内を更新してください。新機能が開発ブランチだけに存在する場合は公開済みとして紹介しません。

## 開発環境

| ツール | 使用環境 |
| --- | --- |
| Node.js | 22.12以降（検証は24系） |
| パッケージ管理 | pnpm 10.27.0。バージョンは `package.json`、依存関係は `pnpm-lock.yaml` で管理 |
| Web / SSR | Hono 4、React 19、Vite 7 |
| 配信 | Cloudflare Workers、Wrangler 4 |
| 検証 | TypeScript、Playwright、axe-core |

```sh
git clone https://github.com/MochiLog/MochiLog-Web.git
cd MochiLog-Web
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm dev` が表示するローカルURLを開いてください。通常は `http://127.0.0.1:5173` です。

## コマンド

| コマンド | 動作 |
| --- | --- |
| `pnpm dev` | Viteの開発サーバー |
| `pnpm typecheck` | TypeScriptの型検査 |
| `pnpm build` | 型検査とWorkersのdry-runビルド。**本番へは配信しません** |
| `pnpm preview` | Workersのローカル実行環境を `127.0.0.1:8787` で起動 |
| `pnpm test` | Playwrightの検証。必要に応じてViteを起動 |
| `pnpm run deploy` | 型検査後、Cloudflareの本番へ配信 |

`deploy` はpnpm自身にも同名のコマンドがあるため、配信には **`pnpm run deploy`** を使ってください。既存の `pnpm dep` もこのスクリプトへ接続しています。

## テスト

初回のみブラウザをインストールしてから実行します。

```sh
pnpm exec playwright install chromium
pnpm typecheck
pnpm build
pnpm test
```

Workersの実行環境で確認する場合は、先に `pnpm preview` を起動し、別ターミナルで実行します。

macOS / Linux:

```sh
TEST_BASE_URL=http://127.0.0.1:8787 pnpm test
```

PowerShell:

```powershell
$env:TEST_BASE_URL = 'http://127.0.0.1:8787'
pnpm test
Remove-Item Env:TEST_BASE_URL
```

### 検証範囲

- 日本語・英語の全5ページを320 / 390 / 768 / 1024 / 1440px幅で確認。
- JavaScript無効時の表示、ページのはみ出し、見出しとcanonicalを確認。
- モバイルメニュー、言語切替、期間プレビュー、キーボード操作、FAQを確認。
- 言語判定、404、アセット配信、サイトマップを確認。
- 全5ページのライト・ダークでWCAG A / AAのaxe自動検査。

2026-09-08時点で、Workersのローカル環境で全15テスト、Cloudflare上のプレビューで主要4テストが成功しています。自動検査は全ブラウザ・実機・支援技術での挙動を保証するものではありません。スクリーンショットは `test-results/` に保存します。

## Cloudflare Workersへの配信

配信には、対象Cloudflareアカウントの認証とWorkerへの権限が必要です。

```sh
# 本番のトラフィックを切り替えずに確認用バージョンを作成
pnpm exec wrangler versions upload --preview-alias redesign

# 本番反映時のみ
pnpm run deploy
```

Worker名は `mochilog-web`。設定は [wrangler.toml](../wrangler.toml) にあります。静的アセットは `public/`、HTMLとサイトマップはWorkerが返します。公開ドメイン以外で返すHTMLはnoindexです。

確認用アップロードと本番反映は別の操作です。詳しくは [CloudflareのPreview URLs](https://developers.cloudflare.com/workers/versions-and-deployments/preview-urls/) を参照してください。

## ファイル構成

| パス | 役割 |
| --- | --- |
| `src/index.tsx` | ルーティング、言語判定、サイトマップ、404 |
| `src/content.ts` | 日本語・英語の紹介文、FAQ、開発中機能 |
| `src/i18n.tsx` | 規約・プライバシーポリシーと表示言語コンテキスト |
| `src/components/Layout.tsx` | 共通ナビゲーション、フッター、SEOメタデータ |
| `src/pages/` | 各ページの構成 |
| `public/styles.css` | 共通デザイン・レスポンシブ・ダーク表示 |
| `public/` | CSS、アプリのアイコンレイヤー、OG画像、robots.txt |
| `tests/site.spec.ts` | 表示・操作・アクセシビリティ検証 |

## アプリの変更を反映するとき

アプリ本体の実装と公開状況を確認して、`src/content.ts` の紹介文・FAQ・開発中案内を更新します。iCloudや共有などデータの扱いが変わる場合は、アプリ側のプライバシーポリシーとWeb側の記述を合わせてください。開発ブランチにあるだけの機能を、公開済みとして案内しないようにしています。

アイコンのレイヤーはMochiLogアプリのアセットを使用しています。

