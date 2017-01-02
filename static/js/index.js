$(function() {
    //屏幕宽度>768
    let arr1 = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11]
        ],
        //屏幕宽度<768
        arr2 = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [9, 10, 11]
        ];

    let arr = window.innerWidth > 768 ? arr1 : arr2;
    window.onresize = function() {
        return arr = window.innerWidth > 768 ? arr1 : arr2;
    }

    function Moving() {
        this.index = $(this).index();
        //点击下标所在数组
        this.arr = () => {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].indexOf(this.index) != -1) {
                    return arr[i];
                }
            }
        };
        //对应数组位置
        this.m = arr.indexOf(this.arr());
        //数组里元素对应的位置
        this.n = this.arr().indexOf(this.index);

        //transform
        this.change = $(this).css('transform', 'scale(1.3)');
        //水平
        this.moveHorizon = (() => {
            for (let i = 0; i < this.arr().length; i++) {
                if (i < this.n) {
                    $('.icons').eq(this.arr()[i]).css('transform', 'translate(-20px)')
                }
                if (i > this.n) {
                    $('.icons').eq(this.arr()[i]).css('transform', 'translate(20px)')
                }
            }
        })();
        //竖直方向
        this.moveVertical = (() => {
            for (let i = 0; i < arr.length; i++) {
                if (i < this.m) {
                    $('.icons').eq(arr[i][this.n]).css('transform', 'translate(0,-20px)')
                }
                if (i > this.m) {
                    $('.icons').eq(arr[i][this.n]).css('transform', 'translate(0,20px)')
                }
            }
        })();

        //右边内容区域
        this.content = function(j) {
            switch (j) {
                case 0:
                    return ['Css3:', '了解 Css3 新增选择器（属性，结构伪类，状态伪类），了解 flex,media,transform,animated 等 ；'];
                case 1:
                    return ['Html5:', '标签更加细化，主体结构标签与非主体类结构标签，新增功能性标签，Canvas，svg，以及拖放功能；'];
                case 2:
                    return ['Git:', '了解 Git 的常用命令，上传和下载代码从 Github；'];
                case 3:
                    return ['Github:', '代码管理库，能学习到许多大牛的作品；'];
                case 8:
                    return ['Vue:', '熟悉Vue模块化思想，熟悉使用Vue-router,Vuex，了解Vue与React,Angular的相同点与不同点'];
                case 4:
                    return ['Javascript:', '了解 ECMAScript 核心语法，新增ES6语法，以及ES7 async、await处理异步事件；了解BOM,DOM；'];
                case 5:
                    return ['Jquery:', '了解 Jquery API，独立完成各项操作；'];
                case 6:
                    return ['Bootstrap:', '能用 Bootstrap 完成页面的基本布局；'];
                case 7:
                    return ['React:', '了解 React 模块化思想，虚拟 DOM diff 算法，react-router, jsx ，redux；'];
                case 9:
                    return ['Scss:', '了解使用 CSS 预处理器，提升了开发速度，使得 css 的编写变得简单和可维护；'];
                case 10:
                    return ['Webpack:', '了解 webpack 打包机制，Hotload,webpack-dev-server 等；'];
                case 11:
                    return ['Node:', '了解 Node.js 部分 API 的使用，包管理器 NPM 的使用；']
            }
        }
        $('.Ability-right-content').addClass('bounceIn')
        $('#title').html(this.content(this.index)[0]);
        $('#content').html(this.content(this.index)[1]);
    }
    $('.icons').hover(Moving, function() {
        $('.icons').css({
            transform: 'translate(0) scale(1)'
        });
        $('.Ability-right-content').removeClass('bounceIn')
    });


    //car 旋转
    $('.car').click(function() {
        if ($(this).hasClass('fliped')) {
            $(this).removeClass('fliped');
        } else {
            $(this).addClass('fliped');
        }
    });

    //滚动
    function scrollTop(name) {
        $('body,html').stop(true, false).animate({
            scrollTop: name.offset().top
        }, 1000)
    }
    $('.About').click(() => {
        scrollTop($('#About'));
    });
    $('.Ability').click(() => {
        scrollTop($('#Ability'));
    });
    $('.Items').click(() => {
        scrollTop($('#Items'));
    });
});