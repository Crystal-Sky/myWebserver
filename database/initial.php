<?php
/**
 * Created by PhpStorm.
 * User: 云雪
 * Date: 2018/5/7
 * Time: 16:46
 */
    header("Status: 200 OK");
    header('Content-type:text/json');     //这句是重点，它告诉接收数据的对象此页面输出的是json数据；

    $serverName = "localhost";
    $username = "root";
    $password = "";
    $databaseName="mywebsite";
    $urlCollection=array();//urlcollection
    $articleLibrary=array();//articlelibrary

    // 创建连接
    $conn = new mysqli($serverName, $username, $password,$databaseName);
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
    $sql = "set names utf8";
    $conn->query($sql);

    $sql = "SELECT id, urlName, urlAddress FROM urlcollection";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
            array_push($urlCollection,$row);
        }
    } else {
        echo "0 结果";
    }

    $sql="SELECT id, articleTittle, articlePueText, articleImage , articleUrl FROM articlelibrary";
    $result=$conn->query($sql);
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
            array_push($articleLibrary,$row);
        }
    } else {
        echo "0 结果";
    }

    $finalResult=array('urlCollection'=>$urlCollection,'articleLibrary'=>$articleLibrary);
    echo json_encode($finalResult,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES);
    //关闭连接
    $conn->close();
?>