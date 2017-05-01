<!doctype html>
<html lang="ja">

<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width">
<meta name="format-detection" content="telephone=no">
<title>豊中市千里の矯正歯科なら「ジョイスマイル矯正歯科」</title>
<meta name="description" content="豊中市の千里中央にある矯正歯科、「ジョイスマイル矯正歯科」。歯を抜かない矯正治療から歯並びのことまで詳しくご紹介しています。" />
<meta name="keywords" content="矯正歯科,豊中,千里,大阪" />
<meta property="og:type" content="site">
<meta property="og:description" content="豊中市の千里中央にある矯正歯科、「ジョイスマイル矯正歯科」。歯を抜かない矯正治療から歯並びのことまで詳しくご紹介しています。">
<meta property="og:title" content="豊中市千里の矯正歯科なら「ジョイスマイル矯正歯科」">
<meta property="og:url" content=" http://joysmile-kyousei.com/ ">
<meta property="og:image" content="/lib/image/cmn/logo.png">
<meta property="og:site_name" content="豊中市千里の矯正歯科なら「ジョイスマイル矯正歯科」">
<title>豊中市千里の矯正歯科なら「ジョイスマイル矯正歯科」</title>
<link rel="shortcut icon" href="/lib/image/favicon.ico"/>
<link rel="stylesheet" href="/lib/css/slick.css">
<link rel="stylesheet" href="/lib/css/style.css">
<link rel="stylesheet" href="/lib/css/cmp.css">
<link rel="stylesheet" href="/lib/css/inquiry.css">
<script src="/lib/js/jquery.min.js"></script>
<script src="/lib/js/jquery.matchHeight.js"></script>
<script src="/lib/js/slick.min.js"></script>
<script src="/lib/css/main.js"></script>
<!--[if lt IE 9]>
<script src="/lib/js/html5shiv-printshiv.min.js"></script>
<![endif]-->
</head>

<body>

<?php include_once(dirname(__FILE__).'/../lib/ssi/header.html'); ?>

<div id="topicpath"><a href="/">トップページ</a> &gt; 資料請求／お問い合わせ</div>

<div id="container">
<div id="contents" class="wide">
<!-- #contents -->
<h1 class="htype01">資料請求／お問い合わせ</h1>
<!-- ▼************ 送信内容表示部　※編集は自己責任で ************ ▼-->
<div id="formWrap">
<?php if($empty_flag == 1){ ?>
<div id="reserve">
<p class="bm20">入力にエラーがあります。下記をご確認の上「修正する」ボタンにて入力画面にお戻りください。</p>
<?php echo $errm; ?>
					<div class="btn">
						<a href="#" class="btn02" onclick="history.back(); return false;">修正する</a>
					</div>
</div>
<?php }else{ ?>
<p>以下の内容で間違いがなければ、「送信」ボタンを押してください。</p>
<form action="<?php echo h($_SERVER['SCRIPT_NAME']); ?>" method="POST" id="inq_form">
<table class="tableformat01">
<?php echo confirmOutput($_POST,$Email_confirm);//入力内容を表示?>
</table>
<input type="hidden" name="mail_set" value="confirm_submit">
<input type="hidden" name="httpReferer" value="<?php echo h($_SERVER['HTTP_REFERER']);?>">
<div class="submit">
<ul>
<li class="btn_submit"><input type="submit" value="送信"></li>
<li class="back"><a href="#" class="btn_back" onClick="history.back(); return false;">≪ 戻る</a></li>
</ul>
</div>

</form>

<?php } ?>
</div><!-- /formWrap -->
<!-- ▲ *********** 送信内容確認部　※編集は自己責任で ************ ▲-->
<!-- /#contents -->
</div>

</div>

<?php include_once(dirname(__FILE__).'/../lib/ssi/footerGmap.html'); ?>
<?php include_once(dirname(__FILE__).'/../lib/ssi/footer.html'); ?>


</body>
</html>