# Confusion-Flick
部内プロコン 2019

## 作業方法

### 最初にやること
1. Git を入れておく． [Git for Windows](https://gitforwindows.org/)
1. 適当な場所で `git clone https://github.com/Siketyan/Confusion-Flick.git` を実行する．  
   (以下，このときにできた `Confusion-Flick` フォルダのことをリポジトリフォルダという)

### 一つの作業をする流れ
1. 自分がやるタスクを Issues から選ぶ．
1. Assignees の Assign yourself をクリックして自分を担当にする．
1. コマンドプロンプトなどを開き，リポジトリフォルダに移動しておく．
1. `git checkout master` でマスターブランチに移動する．
1. `git pull` で変更を取り込んでおく．
1. `git checkout -b [ブランチ名] master` で新しいブランチを作る．名前は Issue の番号 (#XXX) を使って `issue/XXX` などでよい．
1. ファイルを直接操作して実際の作業をする．
1. `git add [ファイル名]` で変更したファイルを追加する．
1. `git commit -m "[作業内容]"` でメッセージをつけて作業をコミットという単位にまとめる． (1 つの作業で複数回コミットしてもいい)
1. `git push -u origin [ブランチ名]` で GitHub にコミットをアップロードする．
1. [ここ](https://github.com/Siketyan/Confusion-Flick/compare) で base を master ， compare を先程のブランチ名にして，プルリクエストを作成する．
1. タイトルに作業内容を入力する． ( `Close #XXX` と Issue 番号を書いておくと自動でクローズされる)
1. Create pull request をクリックして完了する
1. レビューとマージを待つ
