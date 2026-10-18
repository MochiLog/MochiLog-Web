# コード整形

TypeScript・TSX・CSSはPrettier 3.6.2で2スペース・100桁を目安に整形します。

```sh
pnpm install --frozen-lockfile
pnpm format
pnpm format:check
```

`src`、`tests`、公開スタイル、ビルド・テスト設定が対象です。生成物、依存ライブラリ、第三者の開発支援ファイルは対象に含めません。

## 2026-10-19の確認

TypeScriptの型チェックとPlaywright 15件が成功。日本語・英語、320〜1440pxの表示、表示操作、言語切替、アセット、アクセシビリティを確認。
