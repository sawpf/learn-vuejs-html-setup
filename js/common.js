const footer = Vue.createApp({
  data: () => ({
    links: [
      {href: '/', label: 'ホーム'},
      {href: 'templateD.html', label: 'テンプレートディレクティブ'},
      {href: 'computed.html', label: '算出プロパティ'},
      {href: 'watchEx.html', label: '算出と監視プロパティ比較'},
      {href: 'apiEx.html', label: '実践演習：APIを用いたリアルタイムサーチ'},
      {href: 'htmlBinding.html', label: 'クラスとスタイルのバインディング'},
      {href: 'condition.html', label: '条件付レンダリング'},
      {href: 'event.html', label: 'イベントハンドリング'},
      {href: 'form.html', label: 'フォーム入力バインディング'},
      {href: 'component.html', label: 'コンポーネントを使おう'},
    ]
  })
}).mount('#footer')