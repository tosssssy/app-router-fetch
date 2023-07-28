## App Router のデータ取得周りの検証

サーバーコンポーネントからクライアントコンポーネントへ Promise が直接渡せることを検証しました。

## 検証結果

### React から提供されている use

正常に動作。

![image](https://github.com/tosssssy/app-router-fetch/assets/65057976/767600ad-c55b-4239-bd90-81d9cbf15f25)


### SWR 内部の use 代替実装

開発サーバーではエラーが出て動作せず。

![image](https://github.com/tosssssy/app-router-fetch/assets/65057976/054a5a2d-b67e-4c30-941a-c4ff2e17108e)


本番用にビルドした後にサーバーを起動すると、エラーは出るものの動作する時もある。

リロードで動作する時としない時がある。

![image](https://github.com/tosssssy/app-router-fetch/assets/65057976/22461052-f3f8-4786-bab0-3d5b70fafa9e)

