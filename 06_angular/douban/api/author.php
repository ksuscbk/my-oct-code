<?php


        //在这里面发送两个请求，
        //在把数据合并到一起。然后在输出到客户端.

        //本周推荐的作者
        $recAuthor=file_get_contents("https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6");

        //全部数据.
        $allAuthor=file_get_contents("https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6");

        //将两个请求的数据进行合并  目前他们都是字符串，json 格式的字符串

        //可以先转换成对象
        $recObj=json_decode($recAuthor);
        $allObj=json_decode($allAuthor);
        //我创建关联数组
        $array=array(
            "recAuthor"=>$recObj,
            "allAuthor"=>$allObj
        );

        //把这个数组变成json 字符串向客户端输出.
        echo  json_encode($array);

?>