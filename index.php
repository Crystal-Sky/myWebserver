<?php
/**
 * Created by PhpStorm.
 * User: 云雪
 * Date: 2017/10/17
 * Time: 19:02
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Crystal-Sky的世界</title>
</head>
<body>
    <button onclick="deleteOne()">删除一个</button>
    <button onclick="clearAll()">删除</button>
    <h1>Status:</h1>
    <div id="statusDiv"></div>
    <h1>Server Data:</h1>
    <div id="serverData"></div>
    <script>
        var local=window.localStorage;
        local.setItem('名字','逍遥');
        local.setItem('性别','男');
        alert(local.getItem('名字'));

        console.log(local.key(1));
        function deleteOne(){
            local.removeItem('性别');
        }
        function clearAll(){
            local.clear();
        }
    </script>
</body>
</html>
