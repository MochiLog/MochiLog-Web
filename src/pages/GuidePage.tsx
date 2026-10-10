import { useLocaleContext } from "../i18n";
import { copy, APP_STORE } from "../content";

export function GuidePage() {
  const { locale } = useLocaleContext();
  const t = copy[locale];
  const ja = locale === "ja";
  const sections = ja
    ? [
        [
          "容量は、ログに記録された値。",
          "mAhはバッテリーの電荷容量を表す単位です。MochiLogはログの容量値や設計容量との比率を表示します。ログは記録時点の推定値なので、温度や使用状況、OSの補正などで変動します。「設定」より正確な公式診断という意味ではありません。",
        ],
        [
          "1サイクルは、合計100%分の使用。",
          "たとえば50%使った日が2日あれば、合計で1サイクルに相当します。充電器につないだ回数ではありません。サイクル数だけで交換時期が決まるわけではなく、実際の持続時間やAppleの診断も合わせて確認してください。",
        ],
        [
          "同じデバイスの記録を重ねる。",
          "日付の異なるログを保存すると、単日の上下に振り回されず、長い期間の傾向を見やすくなります。ログの形式や含まれる項目によって、一部の数値を取得できない場合があります。",
        ],
        [
          "同期と共有は、自分で選ぶ。",
          "iCloud同期を有効にすると、自分のプライベートデータベースを使って記録を同期します。WatchにはペアリングしたiPhoneから転送します。サポートにログを送るときは、識別情報などが含まれていないか確認し、必要な範囲だけを共有してください。",
        ],
      ]
    : [
        [
          "Capacity is a value recorded in your log.",
          "mAh measures electric charge capacity. MochiLog shows logged capacity values and ratios to reference capacities. These estimates can fluctuate with temperature, usage, and OS corrections. They are not an official diagnosis that is more accurate than Settings.",
        ],
        [
          "One cycle means 100% of use, in total.",
          "Using 50% on each of two days amounts to one cycle. It is not the number of times you plug in a charger. Cycle count alone does not determine replacement timing; consider real battery life and Apple’s diagnostics too.",
        ],
        [
          "Build a history for the same device.",
          "Logs from different dates help you see longer-term trends rather than focus on daily fluctuations. Some values may be unavailable depending on the log format and the information it contains.",
        ],
        [
          "Choose how to sync and share.",
          "Enabling iCloud sync stores records in your private database. Your paired iPhone transfers records to Watch. Before sending a log to support, check for identifiers or other information and share only what is necessary.",
        ],
      ];
  return (
    <article>
      <p className="eyebrow">GETTING STARTED</p>
      <h1>
        {ja
          ? "ログから始める、\nバッテリーの記録。"
          : "Start with a log. Build a history."}
      </h1>
      <p className="guide-lead">{t.howIntro}</p>
      <ol className="steps">
        {t.steps.map((step, i) => (
          <li key={step.title}>
            <span className="step-index">0{i + 1}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <aside className="guide-callout">
        <strong>
          {ja
            ? "ログがない・読み込めないときは"
            : "If a log is missing or won’t import"}
        </strong>
        <p>
          {ja
            ? "解析データが生成されるまで時間がかかる場合があります。複数ファイルで失敗する場合はひとつずつ試してください。iCloud同期にはiOS・iPadOS 17以降が必要です。"
            : "Analytics data may take time to appear. If multiple files fail to import, try one at a time. iCloud sync requires iOS or iPadOS 17 or later. Some features vary with the app and OS version."}
        </p>
      </aside>
      <section>
        <h2>{ja ? "PCとつなぐ、新しい使い方。" : "A new way to use your paired computer."}</h2>
        <p>{ja
          ? "PC連携ベータでは、Mac・Windowsが日次の解析ログを収集し、スマホでアプリを開いたときにまとめて受信します。初回の信頼設定とQRペアリングを済ませれば、解析・記録はスマホに任せられます。PC連携を使わなくても、これまでの手動読み込みは使えます。"
          : "In the companion beta, Mac or Windows collects daily Analytics files for your mobile app to receive when opened. Complete initial trust and QR pairing, then let mobile handle parsing and recording. Manual import remains available without a computer."}</p>
        <p>{ja
          ? "現在値を見るには「設定 → 高度な設定 → 現在のバッテリー」をオンにします（初期状態はオフ）。既存のPCペアリングで、意味が確認できた充放電回数・充電状態・電圧などを専用タブの表に表示します。容量の内部値など、意味や単位が未確定の項目は詳細側に分けます。「詳細情報を表示」を開くと、意味が未確定の内部値やチャンネル情報も確認できます。PCでも現在値は専用タブに表示し、概要の先頭はペアリング済み端末一覧にしています。スマホは機種名を表示し、同じ端末を複数PCから取得した場合の共通値はまとめ、違う項目だけPC別に比較できます。取得日時と状態は各PCごとに残します。アプリを開いている間に更新し、値が変化したときだけ暗号化して転送します。履歴・記録・iCloudには保存せず、取得できない項目や古い値は区別して表示します。"
          : "Enable Settings → Advanced Settings → Live Battery (off by default) to see a table of understood readings such as cycle count, charging and voltage, using existing computer pairings. Uncertain capacity fields remain in details. Open Show detailed information to inspect uncertain internal fields and channel metadata. Desktop Live Battery also has its own tab, with paired devices first in Overview. Mobile shows friendly model names, combines identical values from multiple computers reading the same device, and compares only differing fields. Each source keeps its acquisition time and state. Values refresh while open; only changed values are transferred, encrypted. Values are not saved to history, records or iCloud. Missing fields and outdated values are shown separately."}</p>
        <p>{ja
          ? "スマホの新しい4.0.0ベータ、MochiLog Mac 0.2.14／Windows 0.1.11以降が必要です。Windowsは11のみ対応し、初回USB信頼設定にはApple DevicesまたはApple公式のクラシック版iTunesを使用します。日次ログの収集にはロック解除が必要です。現在値の取得もOSや接続状態で失敗する場合があり、日次ログやAppleの公式診断と同じ意味ではありません。"
          : "Use the new mobile 4.0.0 beta with MochiLog Mac 0.2.14 or Windows 0.1.11 or later. Windows 11 is required; initial USB trust uses Apple Devices or classic iTunes from Apple. Daily-log collection requires an unlocked device. Current-value acquisition can also fail depending on OS and connectivity, and is separate from daily logs or official Apple diagnosis."}</p>
      </section>
      <section>
        <h2>{ja ? "自動ログ収集を、自分の使い方で。" : "Choose how to collect your logs."}</h2>
        <p>{ja ? "設定 → 自動ログ収集にPC連携と端末内取得をまとめました。それぞれ独立して切り替えられます。端末内取得は初期状態でオフの実験機能です。対応するローカルVPN／リフレクター経路で自分の端末の診断サービスへ接続します。最新版の認証済みPCから、自分の端末のOSペアリングを明示的に引き継ぐか、RPPairingファイルを読み込みます。初期OS信頼設定と対応経路が必要です。端末内取得はiOS/iPadOS 17以降に対応します。27以降は端末内で初回ペアリングも可能です（Developer Modeが必要です）。4.0.0ベータ1050以降では、ロック解除とVPN接続を維持すると、アプリを表示していない間もOSが許可したタイミングで取得を試みます。完成したファイルは次にアプリを開いた時に解析・記録します。実行時刻や間隔は保証されません。OSの背景起動・開始終了・中断は日付別の診断ログに残り、機能別ファイルの先頭で形式とアプリのバージョンを確認できます。"
          : "Settings → Automatic Log Collection contains independent PC and on-device options. On-device acquisition is experimental and off by default. It connects to your own diagnostic service through a compatible local VPN/reflector route. Explicitly reuse your own OS pairing from an updated authenticated computer, or import an RPPairing file. Initial OS trust and a compatible route are required. On-device collection supports iOS/iPadOS 17 or later. Initial pairing entirely on the device requires 27 or later and Developer Mode. From 4.0.0 beta 1050, an unlocked device with its VPN connected can also attempt collection while the app is not displayed, when iOS allows it. Complete files are analyzed and recorded the next time you open the app. Timing and intervals are not guaranteed. Daily diagnostics record OS wakes, starts, completion and interruptions; feature-file headers identify the log format and app version."}</p>
        <p>{ja ? "4.0.0ベータ1051以降では、「設定 → デバッグ → 動作ログ」に日付別の端末ログ・受信したPCのログ・保存設定をまとめています。端末内取得やPC連携をオフにしていても保存済みログを確認できます。iPadでは設定の右側の画面で開きます。"
          : "From 4.0.0 beta 1051, Settings → Debug → Activity logs groups daily device logs, received computer logs, and retention settings. Saved logs remain available when on-device or PC collection is disabled. On iPad, they open in the settings detail pane."}</p>
        <p>{ja ? "VPNは別アプリで提供されます。MochiLogのQRだけでAppleの信頼設定は作れません。初回設定の完全無線化・Developer Modeオフ・バックグラウンドでの取得は保証しません。両方式で同じログが届いても共通の取り込み処理で重複を避けます。"
          : "The VPN is provided by a separate app. A MochiLog QR alone cannot establish Apple OS trust. Fully wireless initial setup, Developer Mode-off operation and background acquisition are not guaranteed. Both paths use the same import queue to avoid duplicates."}</p>
        <p>{ja ? "双方のiCloud同期と同じApple Accountが確認できた場合は、同じPCの他の端末の現在のバッテリー値も確認できます。PCの自動更新確認は初期状態でオフで、最初の選択画面や設定で有効にできます。これらの追加機能にはMochiLog 4.0.0 (1041)、Mac 0.2.20／Windows 0.1.17以降が必要です。"
          : "Confirmed iCloud sync on both devices and the same Apple Account also allow current battery readings from other devices paired with the same PC. PC automatic update checks are off by default and can be enabled in the initial prompt or settings. These additions require MochiLog 4.0.0 (1041), Mac 0.2.20 or Windows 0.1.17 or later."}</p>
      </section>
      <section>
        <h2>{ja ? "複数端末のログも、元の端末のまま。" : "Logs from other devices, with their original identity."}</h2>
        <p>{ja
          ? "開発中の複数端末共有では、同じPCとペアリングしたiPhone・iPadについて、双方のiCloud同期がオン・同じApple Accountと確認できた場合だけ、ほかの端末のログも暗号化して受信します。3台・4台でも受信先ごとに確認します。同期オフ・別アカウント・未確認なら共有しません。共有元のアプリをしばらく開いていない場合は確認まで保留します。PC側で削除済みのログは復元しません。"
          : "In the multi-device sharing feature under development, iPhone and iPad paired with the same computer can receive each other’s logs encrypted only when both have iCloud sync enabled and the same Apple Account is confirmed. The rule applies per recipient with three or four devices too. Sync off, different accounts or unconfirmed settings prevent sharing. If the source app has not been opened recently, sharing waits for confirmation. Logs already deleted on the computer cannot be recovered."}</p>
        <p>{ja ? "元の端末の個体IDを保持し、同じログの二重転送・二重記録を防ぎます。ほかの端末が受信しても、元端末向けの未転送ログは保護します。ログ収集と現在のバッテリー情報は独立して動作します。"
          : "Source device identities are preserved, and duplicate transfers and records are avoided. Another recipient’s acknowledgement protects the source’s pending queue. Log collection and current battery acquisition run independently."}</p>
      </section>
      {sections.map(([title, text]) => (
        <section className="guide-article" key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      ))}
      <p>
        <a href="https://support.apple.com/101575">
          {ja
            ? "Apple：iPhoneのバッテリーとパフォーマンス"
            : "Apple: iPhone battery and performance"}{" "}
          ↗
        </a>
      </p>
      <a className="button primary" href={APP_STORE}>
        {t.download}
      </a>
    </article>
  );
}
