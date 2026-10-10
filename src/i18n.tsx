import React from "react";

export type Locale = "ja" | "en";

export const translations = {
  ja: {
    common: {
      homeLink: "トップページに戻る",
      appName: "MochiLog",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      support: "サポート",
      contactUs: "お問い合わせ",
      contactEmail: "support@mochilog.ryuya-dev.net",
    },
    privacy: {
          "title": "MochiLog プライバシーポリシー",
          "content": "MochiLogとMac・Windows連携アプリでのデータの扱いを説明します。",
          "sections": {
                "s1": "MochiLogは、利用者が読み込んだiPhone・iPad・Apple Watchの解析ログを端末内で処理し、バッテリー記録、機種、日付、容量、製品リージョン、端末を区別する識別子などを保存します。元の解析ログには、これら以外の端末情報や利用状況が含まれる場合があります。設定と記録は原則として利用者の端末内に保存します。開発者へ解析ログや記録が自動送信されることはありません。",
                "s2": "iCloud同期を有効にすると、記録は利用者のiCloudプライベートデータベースを通じて同じApple Accountの端末間で同期されます。Apple Watchアプリには記録が転送されます。エクスポート、ファイル共有、インポートは利用者が選択した内容で実行されます。iOS/iPadOS 27・macOS 27向けMac連携ベータ版では、ペアリングしたMacがロック解除中の端末から解析ログを収集・一時保存し、同じローカルネットワーク上のMochiLogへ暗号化して送ります。Macと端末はペアリング情報、転送結果、診断情報を交換します。Mac連携で開発者のサーバーへログは送信しません。Macアプリの更新確認ではGitHubに接続し、接続先にIPアドレスなどの通信情報が伝わる場合があります。 Windows 11向け連携アルファ版も、ペアリングしたPCから暗号化してMochiLogへ転送します。 現在のバッテリー表示を有効にした場合、ペアリング済みPCが端末の診断サービスから現在の充放電回数・容量、APIが返す製造情報・バッテリー識別情報・状態フラグなどを取得し、暗号化してスマホアプリへ転送します。この現在値はメモリ内だけで保持し、履歴・バッテリー記録・iCloud・サポート用診断ログには保存しません。設定は既定でオフです。日次解析ログの収集・保管とは別の処理です。 PCログ共有では、同じPCとペアリングした端末の双方でiCloud同期がオンで、同じApple Accountと確認できた場合に限り、他の端末のログも暗号化して受信できます。照合にはアプリ固有のCloudKitユーザーIDから生成したハッシュを使用し、Apple ID・メールアドレス・元のユーザーIDはPCへ送信しません。このハッシュはアカウントを照合する識別情報であり、匿名化の保証ではありません。許可はPCのメモリ内で期限付きで保持し、同期オフやアカウント変更を通知します。端末が通信できない場合、PCへの通知は即時には届かず、直前の許可が最大15分残る場合があります。記録の元端末の個体IDは保持し、開発者のサーバーへログは送信しません。利用者が設定したTailscaleなどのVPN経由で通信する場合、そのサービスの条件とデータの扱いも適用されます。 端末内取得は任意の実験機能で、ローカルVPN／リフレクター経由で自分の端末の診断サービスに認証して接続します。OSペアリング情報は端末専用Keychainに保持し、明示的な操作で認証済みPCから暗号化して引き継ぐか、利用者がファイルを読み込みます。開発者のサーバーへ鍵や解析ログは送信しません。解析待ちの一時ファイルは成功後に削除します。同じPCを利用する別端末の現在値も、双方のiCloud同期がオン・同じApple Accountと確認できた場合だけ共有し、値自体は履歴・iCloud・診断ログに保存しません。PCの自動更新確認は初期状態でオフで、有効にするとGitHubに接続します。利用するVPNサービスのデータの扱いも適用されます。",
                "s3": "問い合わせメールを送信した場合、開発者は入力されたニックネーム、メールアドレス、本文、添付ファイルを受け取ります。PC連携専用サポートでは、利用者が送信操作をしたときに端末・MacまたはWindows PCのOS/アプリ版、機種、転送状態、個体識別子、エラーや直近の診断イベントを添付します。診断イベントにはファイル名やパスなどが含まれる場合があります。送信前に内容を確認してください。メールの送受信には利用者と開発者のメール事業者が関わります。問い合わせ情報は対応と必要な記録のために保持し、削除依頼には法令上必要な保存を除き対応します。",
                "s4": "端末内の記録はアプリの削除機能で削除できます。iCloud同期をオフにしても、すでにiCloudや別の端末に保存された記録は自動削除されません。Mac側の転送待ちログやペアリング情報はMacのApplication Supportに保存され、アプリ本体を削除するだけでは消えない場合があります。Macのデータを削除したい場合はサポートへお問い合わせください。端末の再インストール、OSのバックアップ、iCloudの設定により残るデータや復元できるデータは異なります。 Mac・Windows側ではスマホの受領確認後、元ログを既定ですぐ削除します。保管を選ぶと送信済みログを既定で最大500MB・1か月（変更可能）保存し、書き出し・手動再送・削除ができます。未受領の転送待ちログは自動整理と手動削除の対象外です。",
                "s5": "MochiLogは広告、追跡用SDK、第三者向けの利用状況解析SDKを使用しません。App Store版の任意の寄付にはAppleのStoreKitを使用します。Webサイトの配信にはCloudflareを使用し、サイトへのアクセス時にIPアドレスなどの通信情報がサービス提供者に処理される場合があります。本ポリシーを変更した場合はWebサイトとアプリ内の文書を更新し、更新日を示します。",
                "s6": "本ポリシーに関するお問い合わせ、サポートメールの削除依頼は support@mochilog.ryuya-dev.net へご連絡ください。"
          },
          "date": "改定日：2026年10月9日"
    },
    terms: {
          "title": "MochiLog 利用規約",
          "intro": "MochiLogとMac・Windows連携アプリの利用条件です。",
          "articles": [
                {
                      "id": 1,
                      "title": "対象と診断結果",
                      "paragraphs": [
                            "本規約はMochiLogおよびMac連携用のMochiLog Macに適用されます。バッテリーの数値・診断結果は解析ログと機種別の参考値に基づく推計であり、正確性や修理判断への適合性は保証しません。Appleの公式診断サービスではありません。開発者の責任は、適用法令で認められる範囲に限られます。 MochiLog Windowsのアルファ版にも適用されます。"
                      ]
                },
                {
                      "id": 2,
                      "title": "PC連携ベータ",
                      "paragraphs": [
                            "Mac連携はiOS/iPadOS 27とmacOS 27以降を対象とする開発中の機能です。初回ペアリング、同じローカルネットワーク、端末のロック解除などの条件が必要です。OSの変更、接続状態、ログの生成状況によって取得や転送が失敗することがあります。重要な記録は利用者自身でバックアップしてください。 Windows連携アルファ版はWindows 11とiOS/iPadOS 27を対象とし、同様に初回ペアリング、端末のロック解除、接続などの条件があります。 現在のバッテリー表示は任意のベータ機能です。取得項目・意味・更新頻度は端末とOS・接続状況で異なり、日次ログとの一致、常時取得、ロック中の取得を保証しません。この表示は履歴の代わりではなく、Appleの公式診断ではありません。 端末内取得はiOS/iPadOS 17以降の実験機能です。27以降の端末内初回ペアリングにはDeveloper Modeが必要です。4.0.0ベータ1050以降は、ロック解除中かつVPN接続中に、OSが許可するタイミングでアプリ非表示中の取得も試みます。取得したファイルは次回前面表示時に解析・記録します。時刻・間隔・毎日の実行は保証しません。対応するVPN／リフレクター経路と初期OS信頼設定が必要です。PC連携とは別々に切り替えられます。初回設定の完全無線化、Developer Modeオフ、バックグラウンドや常時の取得は保証しません。"
                      ]
                },
                {
                      "id": 3,
                      "title": "寄付と返金",
                      "paragraphs": [
                            "App Store版では、Appleのアプリ内課金による任意の寄付を提供する場合があります。AltStore PAL版とMacアプリではこの課金機能を提供しません。寄付は中核機能の利用条件ではありません。購入、キャンセル、返金はAppleの適用条件と法令に従います。返金を希望する場合はAppleの購入履歴から申請してください。"
                      ]
                },
                {
                      "id": 4,
                      "title": "ライセンスと禁止事項",
                      "paragraphs": [
                            "MochiLogのソースコードと同梱の第三者コンポーネントには、それぞれのオープンソースライセンスが適用されます。本規約はそれらのライセンスで認められた複製、改変、解析、再配布の権利を制限しません。利用者は、法令に違反する行為やサービス・他者の端末の正常な利用を妨げる行為をしてはなりません。"
                      ]
                },
                {
                      "id": 5,
                      "title": "規約の変更",
                      "paragraphs": [
                            "機能や法令の変更に応じて本規約を改定する場合があります。変更後の内容と改定日はWebサイトおよびアプリ内に表示します。"
                      ]
                },
                {
                      "id": 6,
                      "title": "準拠法と連絡先",
                      "paragraphs": [
                            "本規約には日本法を適用します。ただし、居住地の強行法規による消費者の権利は妨げません。お問い合わせは support@mochilog.ryuya-dev.net へお願いします。",
                            "改定日：2026年10月9日"
                      ]
                }
          ]
    },
  },
  en: {
    common: {
      homeLink: "Back to Home",
      appName: "MochiLog",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support",
      contactUs: "Contact Us",
      contactEmail: "support@mochilog.ryuya-dev.net",
    },
    privacy: {
          "title": "MochiLog Privacy Policy",
          "content": "This policy explains how MochiLog and its Mac and Windows companions handle data.",
          "sections": {
                "s1": "MochiLog processes iPhone, iPad, and Apple Watch analytics logs selected by the user on the device. It stores battery records, model, date, capacity, product region, and identifiers used to distinguish physical devices. Original analytics logs may contain other device and usage information. Settings and records are generally stored on the user’s device. Analytics logs and records are not automatically sent to the developer.",
                "s2": "If iCloud sync is enabled, records are synchronized through the user’s private iCloud database between devices using the same Apple Account. Records may be sent to the paired Apple Watch app. Exports, file sharing, and imports use data selected by the user. In the Mac transfer beta for iOS/iPadOS 27 and macOS 27, a paired Mac collects and temporarily stores analytics logs while the mobile device is unlocked, then sends them in encrypted form to MochiLog on the same local network. The Mac and mobile device exchange pairing data, transfer status, and diagnostics. Mac transfer does not send logs to a developer server. The Mac app contacts GitHub to check for updates; GitHub may receive network information such as the IP address. The Windows 11 companion alpha also sends logs from a paired PC to MochiLog using encrypted transfer. If Live Battery is enabled, a paired computer reads current cycle count, capacity and all returned battery fields (including manufacturing metadata, battery identifiers and flags) from the device diagnostics service and sends them encrypted to the mobile app. These current values are held only in memory and are not stored as history, battery records, iCloud data or support diagnostic logs. The setting is off by default. This is separate from collection and retention of daily Analytics files. PC log sharing can deliver another device’s logs encrypted only when both devices are paired with the same computer, have iCloud sync enabled, and the same Apple Account is confirmed. Matching uses a hash derived from an app-scoped CloudKit user ID; the Apple ID, email and original user ID are not sent to the computer. This hash is an account-matching identifier, not a guarantee of anonymity. Consent is held temporarily in computer memory and revoked when sync is disabled or the account changes. If a device cannot communicate, revocation is not immediate and the last consent may remain for up to 15 minutes. Records retain the source device’s identity. Logs are not sent to a developer server. If communication uses a VPN such as Tailscale configured by the user, that service’s terms and data handling also apply. Optional on-device acquisition authenticates to this device’s diagnostic service through a local VPN/reflector route. OS pairing credentials are held in device-only Keychain and explicitly reused over an encrypted authenticated PC connection or imported by the user. Keys and analytics files are not sent to a developer server. Staged files are removed after successful import. Current readings from another device using the same PC are shared only with confirmed iCloud sync enabled on both devices and the same Apple Account; readings are not saved to history, iCloud or diagnostic logs. PC automatic update checks are off by default and connect to GitHub when enabled. The data practices of your VPN service also apply.",
                "s3": "If the user sends a support email, the developer receives the nickname, email address, message, and attachments supplied. Companion support attaches OS and app versions, model, transfer status, device identifiers, errors, and recent diagnostic events from the mobile device and Mac or Windows PC when the user sends the email. Events may include filenames or file paths. Review the email before sending it. The user’s and developer’s email providers process the message. Support information is retained as needed to handle the request and keep necessary records; deletion requests are honored except where retention is required by law.",
                "s4": "Records on the mobile device can be deleted with the app’s deletion controls. Turning off iCloud sync does not automatically delete records already stored in iCloud or on another device. Pending logs and pairing information on the Mac are stored in Application Support and may remain after deleting only the app. Contact support for help deleting Mac data. Reinstallation, OS backups, and iCloud settings affect what remains or can be restored. By default, the Mac and Windows companions delete a raw log after the mobile app acknowledges it. If retention is enabled, acknowledged logs are kept up to 500 MB and one month by default (both adjustable), and can be exported, manually resent, or deleted. Pending unacknowledged logs are excluded from automatic cleanup and manual deletion.",
                "s5": "MochiLog does not use advertising, tracking SDKs, or third-party usage analytics SDKs. Optional tips in the App Store version use Apple StoreKit. Cloudflare serves the website and may process network information such as IP addresses when the site is visited. If this policy changes, the website and in-app documents will be updated with the revision date.",
                "s6": "For policy questions or requests to delete support emails, contact support@mochilog.ryuya-dev.net."
          },
          "date": "Revised: 2026-10-09"
    },
    terms: {
          "title": "MochiLog Terms of Use",
          "intro": "These terms govern MochiLog and its Mac and Windows companions.",
          "articles": [
                {
                      "id": 1,
                      "title": "Scope and results",
                      "paragraphs": [
                            "These terms apply to MochiLog and its Mac companion, MochiLog Mac. Battery figures and diagnostic results are estimates based on analytics logs and model reference values. Their accuracy or suitability for repair decisions is not guaranteed. The apps are not official Apple diagnostic services. The developer’s liability is limited only to the extent permitted by applicable law. They also apply to the MochiLog Windows companion alpha."
                      ]
                },
                {
                      "id": 2,
                      "title": "Companion transfer beta",
                      "paragraphs": [
                            "Mac transfer is an in-development feature for iOS/iPadOS 27 and macOS 27 or later. It requires conditions such as initial pairing, a shared local network, and an unlocked mobile device. Collection or transfer may fail because of OS changes, connectivity, or whether logs exist. Keep your own backup of important records. The Windows companion alpha supports Windows 11 and iOS/iPadOS 27 and likewise requires initial pairing, an unlocked device, and connectivity. Live Battery is an optional beta feature. Available fields, their meaning and refresh frequency depend on device, OS and connectivity. Matching daily logs, continuous availability and locked-device acquisition are not guaranteed. The display is not a substitute for history or an official Apple diagnosis. On-device acquisition is experimental and requires iOS/iPadOS 17 or later, a compatible VPN/reflector route and initial OS trust. Initial pairing entirely on the device requires 27 or later and Developer Mode. From 4.0.0 beta 1050, collection can also be attempted while the app is not displayed, when the device is unlocked, its VPN is connected, and iOS permits execution. Files are analyzed and recorded when the app next becomes visible. Timing, intervals and daily execution are not guaranteed. It is independently configurable from PC transfer. Fully wireless initial setup, Developer Mode-off operation, background or continuous acquisition are not guaranteed."
                      ]
                },
                {
                      "id": 3,
                      "title": "Tips and refunds",
                      "paragraphs": [
                            "The App Store version may offer optional tips through Apple In-App Purchase. This payment feature is not offered in the AltStore PAL version or Mac app. Tips are not required for core features. Purchases, cancellations, and refunds are governed by Apple’s applicable terms and law. Request a refund through your Apple purchase history."
                      ]
                },
                {
                      "id": 4,
                      "title": "Licenses and prohibited conduct",
                      "paragraphs": [
                            "MochiLog source code and bundled third-party components are governed by their respective open-source licenses. These terms do not limit rights to copy, modify, inspect, or redistribute granted by those licenses. Do not violate the law or interfere with services or another person’s device."
                      ]
                },
                {
                      "id": 5,
                      "title": "Changes",
                      "paragraphs": [
                            "These terms may be revised to reflect changes in features or law. The revised terms and date will appear on the website and in the app."
                      ]
                },
                {
                      "id": 6,
                      "title": "Law and contact",
                      "paragraphs": [
                            "Japanese law governs these terms, without limiting mandatory consumer rights in your place of residence. Contact support@mochilog.ryuya-dev.net with questions.",
                            "Revised: 2026-10-09"
                      ]
                }
          ]
    },
  },
};

export const LocaleContext = React.createContext<{
  locale: Locale;
  t: (typeof translations)[Locale];
}>({ locale: "ja", t: translations.ja });

export function useLocaleContext() {
  return React.useContext(LocaleContext);
}
