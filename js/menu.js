$(document).ready(function(){
    $('#nav_menu').click(function() {
        $('#menu_list').slideToggle();
    });
    var a=16/3;
    console.log(a);
    $.ajax({
        type:'get',
        url:'/MyWebsite/database/initial.php',
        data:null,
        data:'JSONP',
        success:function (data) {
            var urlCollection=data['urlCollection'];
            var articleLibrary=data['articleLibrary'];
            var urlLength=urlCollection.length;
            var articleLength=articleLibrary.length;
            var index;
            for(index=0;index<urlLength;index++){
                var urlChild=$('<a target="_blank"></a>');
                urlChild.attr('href',urlCollection[index]['urlAddress']);
                urlChild.html(urlCollection[index]['urlName']);
                urlChild.appendTo($('#tagRelevant'));
            }

            for(index=0;index<articleLength;index++){
                var parent=$('<div class="articleContent"></div>');
                var child=$('<span class="imageContent"></span>');
                child.data('articleUrl',articleLibrary[index]['articleUrl']);
                child.click(function () {
                    window.open($(this).data('articleUrl'));
                });
                var child2=$('<img />');
                child2.attr('src',articleLibrary[index]['articleImage']);
                child2.appendTo(child);
                child.appendTo(parent);
                child=$('<a class="titleContent" target="_blank"></a>');
                child.attr('href',articleLibrary[index]['articleUrl']);//url:链接
                child.html(articleLibrary[index]['articleTittle']);
                child.appendTo(parent);
                child=$('<span class="diver_line"></span>');
                child.appendTo(parent);
                child=$('<p class="contextContent"></p>');
                child.html(articleLibrary[index]['articlePueText']);
                child.appendTo(parent);
                parent.appendTo($('#article'));
            }

            var currentPage=0;
            var pageSize=2;//每页显示2条
            var totalPage = Math.ceil(articleLength / pageSize);//共分多少页
            /*<ul class="pagination">
                <li><a class="pageDisable" href="#">First</a></li>
                <li><a href="#">Prev</a></li>
                <li><a href="#">1</a></li>
                <li><a class="pageActive" href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="pageInvalid">…</li>
                <li><a href="#">Next</a></li>
                <li><a href="#">Last</a></li>
                <li><span class="pageTotal">共11页 到第<input type="text"onkeyup="value=value.replace(/[^\d]/g,'')" class="pageInput" />页<input name="" value="OK" type="button" class="pageEnsure" /></span></li>
            </ul>*/
            var pageHtml="";
            pageHtml=pageHtml+"<li><a id='firstPage' class='pageDisable' href='javascript:void(0);'>First</a></li>";
            pageHtml=pageHtml+"<li class='hiding pageInvalid'>…</li>";
            pageHtml=pageHtml+"<li><a class='pageActive' href='javascript:void(0);' pageNum='1'>1</a></li>";
            for(index=1;index<totalPage;index++){
                pageHtml=pageHtml+"<li><a class='pageActive' href='javascript:void(0);' pageNum='" + (parseInt(index) + 1) + "'>" + (parseInt(index) + 1) + "</a></li>";
            }
            pageHtml=pageHtml+"<li class='pageInvalid'>…</li><li><a href='#'>Next</a></li><li><a href='#'>Last</a></li>";
            pageHtml=pageHtml+'<li><span class="pageTotal">共'+totalPage+'页 到第<input type="text"onkeyup="value=value.replace(/[^\\d]/g,\'\')" class="pageInput" />页<input name="" value="OK" type="button" class="pageEnsure" /></span></li>';
            var pages=$('<ul class="pagination"></ul>');
            var pagec=$(pageHtml);
            pagec.appendTo(pages);
            pages.appendTo($('#article'));
        }
    });
    /*var request;
    if(window.XMLHttpRequest){
        request=new XMLHttpRequest();
    }else{
        request=new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.onreadystatechange=function () {
        if(request.readyState==4&&request.status==200){
            var data=JSON.parse(request.responseText);
            var urlCollection=data['urlCollection'];
            var articleLibrary=data['articleLibrary'];
            var urlLength=urlCollection.length;
            var articleLength=articleLibrary.length;
            var index;
            for(index=0;index<urlLength;index++){
                var urlChild=$('<a target="_blank"></a>');
                urlChild.attr('href',urlCollection[index]['urlAddress']);
                urlChild.html(urlCollection[index]['urlName']);
                urlChild.appendTo($('#tagRelevant'));
            }
            for(index=0;index<articleLength;index++){
                var parent=$('<div class="articleContent"></div>');
                var child=$('<span class="imageContent"></span>');
                child.data('articleUrl',articleLibrary[index]['articleUrl']);
                child.click(function () {
                    window.open($(this).data('articleUrl'));
                });
                var child2=$('<img />');
                child2.attr('src',articleLibrary[index]['articleImage']);
                child2.appendTo(child);
                child.appendTo(parent);
                child=$('<a class="titleContent" target="_blank"></a>');
                child.attr('href',articleLibrary[index]['articleUrl']);//url:链接
                child.html(articleLibrary[index]['articleTittle']);
                child.appendTo(parent);
                child=$('<span class="diver_line"></span>');
                child.appendTo(parent);
                child=$('<p class="contextContent"></p>');
                child.html(articleLibrary[index]['articlePueText']);
                child.appendTo(parent);
                parent.appendTo($('#article'));
            }
        }
    }
    request.open('get',"/MyWebsite/database/initial.php",true);
    request.send();*/

    //抽取拼串的方法
    function commonfunction(data){
        $('#projectlist').find("li").remove();
        for (var i=0;i<data.length;i++ )
        {
            /*****因为此页面是动态加载的，这里主要就是进行拼串，代码也不少，就不漏出来占空间了*****/
        }　　　　　　//开始是分页的核心了
        if(data.length>0){
//设置页码
            var pading = data[0].padingnum;//总页码
            $('#totalpage').val(pading);
            var page = $('#jiazai').val();//当前页
            $('#countpage').html("<b id='currentPageNo'>"+page+"</b>/"+pading+"");
            $('#span_number').html("共"+pading+"页 到第<input type='text' id='input_number' class='page-txtbox' />页<input name='' value='确定' type='button' onclick='indexpage(-2)'/goods/ajaxqueryGoodsList.do.html','','goodsListContainer','"+pading+"', listPageCallback);' class='page-btn'/>")
        }else{
            $('#countpage').html("<b id='currentPageNo'>"+0+"</b>/"+0+"");
        }
//设置分页的底部 就是 首页 1 2 3 4 5 6 尾页
        var pading = data[0].padingnum;//总页码href="javascript:void(0);"
        var nowpage = $('#jiazai').val();//当前页
//one two three five fore<br>　　　　　　//下面代码看着是比较麻烦，但是也不难理解 全是一样的代码，只不过是加了些判断
        if(nowpage<5 ){
            $('#one').text(1);
            $('#one').attr('href','javascript:pagenum("'+1+'");');
            $('#two').text(2);
            $('#two').attr('href','javascript:pagenum("'+(2)+'");');
            $('#three').text(3);
            $('#three').attr('href','javascript:pagenum("'+(3)+'");');
            $('#five').text(4);
            $('#five').attr('href','javascript:pagenum("'+(4)+'");');
            $('#fore').text(5);
            $('#fore').attr('href','javascript:pagenum("'+(5)+'");');
            $('#five').parent().show();
            $('#fore').parent().show();
        }else{
//alert("已经不是第五页了");
//设置中间的为当前页
            $('#one').text(Number(nowpage)-2);
            $('#one').attr('href','javascript:indexpage("'+(Number(nowpage)-2)+'");');
            $('#two').text(Number(nowpage)-1);
            $('#two').attr('href','javascript:indexpage("'+(Number(nowpage)-1)+'");');
            $('#three').text(nowpage);
            $('#three').attr('href','javascript:indexpage("'+(nowpage)+'");');
            $('#five').parent().show();
            $('#fore').parent().show();
//判断下一页是否超过了总页数
            if(Number(nowpage)+1>pading){
                $('#five').parent().hide();
                $('#fore').parent().hide();
            }else{
                $('#five').parent().show();
                $('#five').text(Number(nowpage)+1);
                $('#five').attr('href','javascript:indexpage("'+(Number(nowpage)+1)+'");');
            }
//判断下一页的第二页是否超过了总页数
            if(Number(nowpage)+2>pading){
                $('#fore').parent().hide();
            }else{
                $('#fore').parent().show();
                $('#fore').text(Number(nowpage)+2);
                $('#fore').attr('href','javascript:indexpage("'+(Number(nowpage)+2)+'");');
            }
        }
//如果总页数小于5，这块代码主要就是设置 1 2 3 4 5 这些的显示和隐藏的
        if(pading==0){
            $('#one').parent().hide();
            $('#two').parent().hide();
            $('#three').parent().hide();
            $('#five').parent().hide();
            $('#fore').parent().hide();
        }else if(pading==1){
            $('#shouye').hide();
            $('#weiye').hide();
            $('#one').parent().hide();
            $('#two').parent().hide();
            $('#three').parent().hide();
            $('#five').parent().hide();
            $('#fore').parent().hide();
        }else if(pading==2){
            $('#one').parent().show();
            $('#two').parent().show();
            $('#three').parent().hide();
            $('#five').parent().hide();
            $('#fore').parent().hide();
        }else if(pading==3){
            $('#one').parent().show();
            $('#two').parent().show();
            $('#three').parent().show();
            $('#five').parent().hide();
            $('#fore').parent().hide();
        }else if(pading==4){
            $('#one').parent().show();
            $('#two').parent().show();
            $('#three').parent().show();
            $('#five').parent().show();
            $('#fore').parent().hide();
        }else{
            $('#one').parent().show();
            $('#two').parent().show();
            $('#three').parent().show();
            $('#five').parent().show();
            $('#fore').parent().show();
        }
//设置高亮显示的，就是是第一页时，1亮，第二页时 2亮
        $('#page a').each(function() {
            $(this).parent().removeClass("current");
            if($(this).text()==nowpage){
                $(this).parent().addClass("current");
            }
        });
//分页完返回页面顶端
        $("html,body").animate({scrollTop:0}, 500);
//最后，给当前页码加1
        $('#jiazai').val(Number(bianlaing)+Number(1));
    }
})