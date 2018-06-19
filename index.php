<!--
 * Created by PhpStorm.
 * User: 云雪
 * Date: 2018/4/14
 * Time: 17:56
 *
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <title>陌汝谨安</title>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/frame.css">
    <link rel="stylesheet" type="text/css" href="css/home.css">
    <link rel="Shortcut Icon" href="images/logo.ico">
    <script src="js/jquery-3.3.1.min.js"></script>
    <!--<link rel="stylesheet" type="text/css" href="css/initial.css">-->
</head>
<body>
    <div class="navigationBar">
        <div class="nav_center">
            <div class="nav_left">
                <a href="/">陌汝谨安</a>
            </div>
            <ul class="nav_right">
                <li><a href="About/about.php">关于我</a></li>
                <li><a href="Gallery/gallery.php">图展</a></li>
                <li><a href="Application/application.php">小应用</a></li>
                <li><a href="/" class="nav_active">首页</a></li>
            </ul>
            <div id="nav_menu" class="bar_menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul id="menu_list" class="nav_right_vertical">
                <li><a href="/">首页</a></li>
                <li><a href="Application/application.php">小应用</a></li>
                <li><a href="Gallery/gallery.php">图展</a></li>
                <li><a href="About/about.php">关于我</a></li>
            </ul>
        </div>
    </div>
    <div class="banner"></div>
    <div class="main_content">
        <div class="content_left" id="article">
            <!--<div class="articleContent">
                <span class="imageContent">
                    <img src="images/lake.png" />
                </span>
                <a href="#" class="titleContent">大鱼·海棠</a>
                <span class="diver_line"></span>
                <p class="contextContent">“你以为你接受的是谁的爱？你接受的是一个天神的爱！他将背叛所有的神灵去爱你！
                    为你忍受一切痛苦！以此带给你欢乐！”湫嘶哑着声音大喊，他歪歪扭扭地站在山崖的巨石上。
                    一个大浪卷来，把他卷到水中。</p>
            </div>
            <ul class="pagination">
                <li><a class="pageDisable" href="#">First</a></li>
                <li><a href="#">Prev</a></li>
                <li><a href="#">1</a></li>
                <li><a class="pageActive" href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="pageInvalid">…</li>
                <li><a href="#">Next</a></li>
                <li><a href="#">Last</a></li>
                <li><span class="pageTotal">共11页 到第<input type="text"onkeyup="value=value.replace(/[^\d]/g,'')" class="pageInput" />页<input name="" value="OK" type="button" class="pageEnsure" /></span></li>
            </ul>-->
        </div>
        <div class="content_right">
            <div class="searchContent">
                <form class="searchForm" method="get" action="">
                    <input class="searchInput" type="text" placeholder="搜索" />
                    <span class="searchIcon"></span>
                </form>
            </div>
            <div class="relevantContent">
                <div class="titleRelevant">网址收藏</div>
                <span class="relevant_line"></span>
                <div class="relevant_tag" id="tagRelevant">
                    <!--<a href="#">哔哩哔哩动画</a>-->
                </div>
            </div>
            <div class="urlContent">
                <div class="urlTitle">与我相关</div>
                <div class="url_line"></div>
                <div class="itemUrl">
                    <span class="blogIcon"></span>
                    <a class="urlTag" href="https://weibo.com/u/3050149494?refer_flag=1005055013_&is_all=1" target="_blank">一剑默然</a>
                    <label class="urlLabel"><a href="https://weibo.com/u/3050149494?refer_flag=1005055013_&is_all=1" target="_blank">微博</a></label>
                </div>
                <div class="itemUrl">
                    <span class="gitIcon"></span>
                    <a class="urlTag" href="https://github.com/Crystal-Sky" target="_blank">Crystal_Sky</a>
                    <label class="urlLabel"><a href="https://github.com/Crystal-Sky" target="_blank">Github</a></label>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom_content">
        <p>Copyright &copy; 2018 陌汝谨安</p>
        <p>备案号</p>
    </div>
    <script src="js/menu.js"></script>
</body>
</html>