                                          js面试题
## 61  说说 window.onload 和 $(document).ready 的区别
        window.onload()方法是必须等到页面包括图片的所有元素加载完毕后才能执行
        $(document).ready() 是 DOM 结构绘制完毕后执行，不必等到加载完毕
## 62  JavaScript自定义事件
        document.createEvent() 创建事件模型
        event.initEvent() 初始化事件
        element.dispatchEvent() 触发事件
## 63   说说你对作用域链的理解
        作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，访问到window对象即会终止，作用域链向下访问是不被允的
        作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期
## 64  什么是变量对象
       变量对象，是执行上下文中的一部分，可以抽象为一种数据作用域，其实也可以理解为就是一个简单的对象，它存储着该执行文件上下文中所有的变量和函数声明（不包含函数表达式）
       活动对象（AO）：当变量对象所处的上下文为 active EC 是，成为活动对象
## 65  说说对JSON的了解？
       JSON是一种轻量级的数据交换格式
       他是基于JavaScript的一个子集。数据格式简单，易于读写，占用带宽小
       JSON字符串转换为JSON对象： 
           var obj = eval('(' + str + ')');
           var obj = str.parseJSON();
           var obj = JSON.parse(str);
       JSON对象转换为JSON字符串：
           var last = obj.toJSONString();
           var last = JSON.stringify(obj);
## 66  箭头函数与普通函数的区别？
      函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
      不可以当做构造函数，也就是不可以使用new命令，否则会抛出一个错误 
      不可以使用arguments对象，该对象在函数体内不存在，如果要用，可以使用Rest参数代替
      不可以使用yield命令，因为箭头函数不可以用作Generator函数（遍历器函数）
## 67  map和forEach的区别
      forEach方法，是最基本的方法，就是遍历与循环，默认有3个参数：分别是遍历的数组内容item、数组索引index、当前遍历的数组Array
      map方法，基本用法与forEach一致，但不同的是，它会返回一个新的数组，所以 callback需要有return值，如果没有，会返回undefined
## 68  IE事件
      IE事件只支持冒泡，所以事件流只有两个阶段：

      事件处理阶段：事件在到达目标元素时，触发监听事件。
      事件冒泡阶段：事件从目标元素冒泡到document，并且依次检查各个节点是否绑定了监听函数，如果有则执行。
## 69  什么是事件传播？
      当一个dom元素发生事件时，事件并不是完全发生在该元素上面，事件传播有三个阶段；

      捕获阶段：事件会从window开始向下到每一个元素，直到到达目标元素；
      目标阶段：事件到达目标元素；
      冒泡阶段：事件从目标元素向上冒泡经过每一个元素，直到到达window；
## 70  fetch发送2次请求的原因
      fetch发送post请求的时候，总是发送2次，第一次状态码是204，第二次才成功？

      原因很简单，因为你用fetch的post请求的时候，导致fetch 第一次发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求。

## 51  __proto__与prototype
        在4.new操作符中相信有人对于function Base(){放了一堆方法}; obj.__proto__ = Base.prototype;不理解，其实这部分也是JavaScript中的原型链知识点、非常重要，一句话总结 prototype是函数才有 的属性实际使用时有一些组件或整个项目常用的方法会放在里面；而 __proto__是每个对象都有的属性 (但是万物皆对象，所以__proto__谁都有)。
## 52  防抖与节流
       重点理解： 关于防抖节流的应用，其实在实际应用中发生滚动事件、input事件、页面resize事件等较常遇到，
       ️防抖含义是对于短时间内连续触发的事件，让某个时间期限内，事件处理函数只执行一次；
       节流含义是对于短时间内连续触发的事件，让某个时间期限内，事件处理函数每定期执行一次；
       防抖和节流的区别： 防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行。
## 53  eval 是做什么的
       它的功能是将对应的字符串解析成 JS 并执行，应该避免使用 JS，因为非常消耗性能（2 次，一次解析成 JS，一次执行）
## 54  cache-control 的值有哪些
       cache-control 是一个通用消息头字段被用于 HTTP 请求和响应中，通过指定指令来实
       现缓存机制，这个缓存指令是单向的，常见的取值有 private、no-cache、max-age、
       must-revalidate 等，默认为 private。
## 55  如何理解前端模块化
       前端模块化就是复杂的文件编程一个一个独立的模块，比如 JS 文件等等，分成独立的
       模块有利于重用（复用性）和维护（版本迭代），这样会引来模块之间相互依赖的问
       题，所以有了 commonJS 规范，AMD，CMD 规范等等，以及用于 JS 打包（编译等处理）
       的工具 webpack
## 56  webpack 用来干什么的
      webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当
      webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其
      中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。 
## 57  img iframe script 来发送跨域请求有什么优缺点？
      iframe

      优点：跨域完毕之后DOM操作和互相之间的JavaScript调用都是没有问题的

      缺点：1.若结果要以URL参数传递，这就意味着在结果数据量很大的时候需要分割传递，巨烦。2.还有一个是iframe本身带来的，母页面和iframe本身的交互本身就有安全性限制。

      script

      优点：可以直接返回json格式的数据，方便处理

      缺点：只接受GET请求方式

      图片ping

      优点：可以访问任何url，一般用来进行点击追踪，做页面分析常用的方法

      缺点：不能访问响应文本，只能监听是否响应
## 58  分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景
      结构：
      display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击，
      visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击
      opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击

      继承：
      display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。
      visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。

      性能：
      displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大
      visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容
      opacity: 0 ：修改元素会造成重绘，性能消耗较少

      联系：它们都能让元素不可见
## 59  display,float,position 的关系
      1.如果display为 none，那么 position 和 float 都不起作用，这种情况下元素不产生框

      2.否则，如果 position 值为 absolute 或者 fixed，框就是绝对定位的，float 的计算值为 none，display 根据下面的表格进行调整。

      3.否则，如果 float 不是 none，框是浮动的，display 根据下表进行调整

      4.否则，如果元素是根元素，display 根据下表进行调整

      5.其他情况下 display 的值为指定值 总结起来：绝对定位、浮动、根元素都需要调整display
## 60  下面代码的输出是什么?

       (() => {
         let x, y;
         try {
           throw new Error();
         } catch (x) {
           (x = 1), (y = 2);
           console.log(x);
         }
         console.log(x);
         console.log(y);
       })();


        参考答案:
        1 
        undefined
        2
## 41  什么时候使用git status
        git status命令用于显示工作目录和暂存区的状态。
        可以在任何时候使用 git status 来检查当前 Git 仓库的状态。它可以告诉你哪些文件已更改但尚未提交到仓库，哪些文件已暂存并准备提交，以及哪些文件尚未跟踪。这对于确保你提交的内容是正确和最新的非常有用。

## 42  什么是分支，分支的优点？操作分支的常见命令
        分支：在版本控制过程中，使用多条线同时推进多个任务。

        分支的好处？
        1.同时并行推进多个功能开发，提高开发效率；
        2.各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响；
        3.失败的分支删除重新开始即可。
        操作分支的常见命令：
        git branch命令用于列出，创建或删除分支。
        git checkout命令用于切换分支或恢复工作树文件。
        git merge命令用于将两个或两个以上的开发历史加入(合并)一起
## 43  列举工作中常用的几个git命令?
        新增文件的命令：git add file或者git add .
        提交文件的命令：git commit –m或者git commit –a
        查看工作区状况：git status –s
        拉取合并远程分支的操作：git fetch/git merge或者git pull
        查看提交记录命令：git reflog
## 44  请描述什么是工作区、暂存区和本地仓库？
        git的工作区：在当前仓库中，新增，更改，删除文件这些动作，都发生在工作区里面。

        git的暂存区：英文叫stage, 或index。在版本库.git）目录下，有一个index文件。它实际上就是一个包含文件索引的目录树，像是一个虚拟的工作区。在这个虚拟工作区的目录树中，记录了文件名、文件的状态信息（时间戳、文件长度等），文件的内容并不存储其中，而是保存在Git对象库（.git/objects）中，文件索引建立了文件和对象库中对象实体之间的对应。如果当前仓库，有文件更新，并且使用git add 命令，那么这些更新就会出现在暂存区中。

        版本库：当前仓库下，如果没有任何的提交，那么版本库就是对应上次提交后的内容。
## 45  请写出查看分支、创建分支、删除分支、切换分支、合并分支的命令以及写出解决冲突的思路？
        删除分支
        git branch -D 要删除的分支名
        删除后也可以再新建
        git branch -b 要新建的分支名

        查看分支
        git checkout -b dev 进入到dev分支
        git branch 查看现在在哪个分支
        然后就可以在dev分支里面写代码，如果出现问题，那就可以切换到master分支
        git checkout master 切换到master分支，这个时候dev分支的代码就没有了，显示的就是master分支的代码
        git branch 可以再使用这个方法来查看分支
        git checkout dev 可以再次切换到dev分支

        合并分支
        1、master上先做修改，并提交。
        2、切换到dev，在dev上进行修改，也要提交
        3、切换回master，然后合并dev，合并的时候一定要切换到相反的那一个分支。
        4、可能会发生冲突，解决方案为在开发工具vscode中手动选择，合并方式，这个是自己选的。
## 46  Echarts切换其他组件统计图时，出现卡顿问题如何解决
       原因：每一个图例在没有数据的时候它会创建一个定时器去渲染气泡，页面切换后，echarts图例是销毁了，但是这个echarts的实例还在内存当中，同时它的气泡渲染定时器还在运行。这就导致Echarts占用CPU高，导致浏览器卡顿，当数据量比较大时甚至浏览器崩溃

       解决方法：在mounted()方法和destroy()方法之间加一个beforeDestroy()方法释放该页面的chart资源，clear()方法则是清空图例数据，不影响图例的resize，而且能够释放内存，切换的时候就很顺畅了
## 47  什么时候应使用 “git stash”？
       git stash 命令把你未提交的修改（已暂存（staged）和未暂存的（unstaged））保存以供后续使用，以后就可以从工作副本中进行还原。
## 48  iframe 是什么？有什么缺点？
       定义：iframe 元素会创建包含另一个文档的内联框架
       提示：可以将提示文字放在标签之间，来提示某些不支持 iframe 的浏览器
       缺点：
       会阻塞主页面的 onload 事件
       搜索引擎无法解读这种页面，不利于 SEO
       iframe 和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能。
## 49  addEventListener 参数
       addEventListener(event, function, useCapture)
       其中，event 指定事件名；function 指定要事件触发时执行的函数；useCapture 指定
       事件是否在捕获或冒泡阶段执行。
## 50  简述ajax 流程
       1客户端产生js的事件
       2创建XMLHttpRequest对象
       3对XMLHttpRequest进行配置
       4通过AJAX引擎发送异步请求
       5服务器端接收请求并且处理请求，返回html或者xml内容
       6.XML调用一个callback()处理响应回来的内容
       7页面局部刷新。

## 31   什么是Promise？我们用Promise来解决什么问题？
        Promise是承诺的意思，承诺它过一段时间会给你一个结果。
        Promise是一种解决异步操作编程的方案，相比回调函数和事件更合理和更强大。
        从语法上讲，promise是一个对象，从它可以获取异步操作的信息。
## 32  Promise有三种状态
        1、pending 初始状态也叫等待状态
        2、fulfiled成功转态
        3、rejected失败状态
## 33  解释下什么是事件代理和应用场景？
       事件代理，俗地来讲，就是把一个元素响应事件（click、keydown…）的函数委托到另一个元素；

        事件流的都会经过三个阶段：捕获阶段 -> 目标阶段 -> 冒泡阶段，而事件委托就是在冒泡阶段完成；

       事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素

       当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数

       应用场景：

       如果我们有一个列表，列表之中有大量的列表项，我们需要在点击列表项的时候响应一个事件，如果给每个列表项一一都绑定一个函数，那对于内存消耗是非常大的，这时候就可以事件委托，把点击事件绑定在父级元素ul上面，然后执行事件的时候再去匹配目标元素

## 34  $(document).ready() 是个什么函数？为什么要用它？
       ready() 函数用于在文档进入ready状态时执行代码。当DOM 完全加载（例如HTML被完全解析DOM树构建完成时），jQuery允许你执行代码。使用$(document).ready()的最大好处在于它适用于所有浏览器，jQuery帮你解决了跨浏览器的难题。需要进一步了解的用户可以点击 answer链接查看详细讨论。
## 35  jQuery 里的 each() 是什么函数？你是如何使用它的？
       each() 函数就像是 Java 里的一个 Iterator，它允许你遍历一个元素集合。你可以传一个函数给 each() 方法，被调用的 jQuery 对象会在其每个元素上执行传入的函数。有时这个问题会紧接着上面一个问题，举个例子，如何在 alert 框里显示所有选中项。我们可以用上面的选择器代码找出所有选中项，然后我们在 alert 框中用 each() 方法来一个个打印它们
## 36  $(this) 和 this 关键字在 jQuery 中有何不同？
       这对于很多 jQuery 初学者来说是一个棘手的问题，其实是个简单的问题。$(this) 返回一个 jQuery 对象，你可以对它调用多个 jQuery 方法，比如用 text() 获取文本，用val() 获取值等等。而 this 代表当前元素，它是 JavaScript 关键词中的一个，表示上下文中的当前 DOM 元素。你不能对它调用 jQuery 方法，直到它被 $() 函数包裹，例如 $(this)。
## 37  你知道那些事件修饰符
        .stop阻止事件冒泡
	.once只执行一次，一次性事件
	.self阻止事件冒泡和事件捕获
	.captrue事件捕获阶段触发
	.prevent阻止浏览器默认行为
	.native 触发原生事件
## 38  XML与JSON的区别？
        1) 数据体积方面。JSON相对于XML来讲，数据的体积小，传递的速度更快些。
        2) 数据交互方面。JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互。
        3) 数据描述方面。JSON对数据的描述性比XML较差。
        4) 传输速度方面。JSON的速度要远远快于XML。
## 39  继承有六种：
        原型继承
        借用构造函数继承
        组合继承
        原型式继承
        寄生式继承
        寄生组合式继承
## 40  Promise有几种状态
        有三种状态：
        pending（进行中）
        fulfilled（已成功）
        rejected（已失败）
         Promise 是es6引入的异步编程解决方案
         可以链式调用，解决回调地狱的问题
## 21  **什么是宏任务，什么是微任务**
         **宏任务和微任务都是异步任务在同步任务队列之后
         而宏任务一般是:包括整体代码script, setTimeout, setInterval、 setlmmediate（node 独有）。
         微任务:原生Promise(有些实现的promise将then方法放到了宏任务中)、
         process.nextTick、Object记住就行了new.promise是宏任务。
         执行顺序
         微观任务先于宏观任务  
## 22  **js 导致内存泄漏的情况**
         大量使用全局变量
         大量使用闭包()
         清除DOM节点时，只清除节点，而没有删除事件
         定时器不清除
            
## 23  **Es6有哪些新特性**
         es2015
        1) let声明变量和const声明常量，两个都有块级作用域
        2)模板字符串字符串方法扩展（startsWith()  判断字符串是否以特定的字串开始，endsWith()   判断字符串是否以特定的字串结束，还有字符串拼接 `` 反引号）
        3)数组扩展方法
        4) ... 展开运算符;结构赋值[a,b]=[b,a]
        5) class类和继承 //react
        6) Promise 解诀异步回调async await，几种状态
        7)新增数据类型map set symbol（数据类型）
        8)模块化expot导出 import导入 
        9>箭头函数

## 24  **var let 和 const三者之间的区别**
        const：必须初始化，而且不能更改
        var : 定义的变量可以修改，如果不初始化会输出undefined，不会报错
        let : 块级作用域，函数内部使用let定义后，对函数外部无影响。
        var可以重复申明，let不可以   
## 25  **使用箭头函数应该注意什么？（箭头函数和function的区别）**
       （1）用了箭头函数，this就不是指向window 而是声明时的 外部环境
       （2）箭头函数不可以使用arguments（参数的集合）对象
        （3）箭头函数不能使用构造函数，也就是说不能使用new命令，否则会抛出一个错误   
## 26  **Promise** **中reject** **和 catch** **处理上有什么区别**（三个状态）
        reject是用来抛出异常，catch 是用来处理异常
        reject是Promise的方法，而catch 是Promise 实例的方法
        reject后的东西，一定会进入then中的第二个回调，如果then中没有写第二个回调，则进入catch
        网络异常(比如断网)，会直接进入catch而不会进入then的第二个回调
## 27  **请用一行代码实现去重**
        var arr =[1,2,4,5,7,8,5,4,1,1,]
        var set=[…new set(arr)]
        var set=Array.from(new set(arr))

        //Set 特性，类似于数组，但它的一大特性就是所有元素都是唯一的，没有重复。
        我们可以利用这一唯一特性进行数组的去重工作。
        //Array.from概念：从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
        实际上:将一个类数组对象或者可遍历对象转换成一个真正的数组。  
## 28  **html5有哪些新特性？**
        新特性：
        \1. 拖拽释放(Drag and drop) API
        \2. 语义化更好的内容标签（header,nav,footer,aside,article,section）
        \3. 音频、视频API(audio,video)
        \4. 画布(Canvas) API
        \5. 地理(Geolocation) API
        \6. 本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；
        \7. sessionStorage 的数据在浏览器关闭后自动删除
        \8. 表单控件，calendar、date、time、email、url、search  
        \9. 新的技术webworker, websocket, Geolocation  
## 29  canvas 和svg的区别
        canvas:

        依赖分辨率
        不支持事件处理器
        弱的文本渲染能力能够以 .png 或 .jpg 格式保存结果图像
        最适合图像密集型的游戏，其中的许多对象会被频繁重绘

        svg：

        不依赖分辨率
        支持事件处理器
        最适合带有大型渲染区域的应用程序（比如谷歌地图）
        复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）不适合游戏应用  
## 30   **隐藏也元素的方式**
        1.display 属性display: none;
        2.hidden 属性<div hidden></div>
        利用 position 和 盒模型 将元素移出可视区范围position:absolute;
        left: -99999px;
        3.利用 transfrom，实现缩放，移动，旋转transform: scale(0);
        height: 0;
        .设置其大小为0height: 0;width: 0; font-size: 0;或者overflow:hidden;
        4.设置透明度为0 opacity: 0;
        5.visibility属性 visibility: hidden;
        6.层级覆盖，z-index 属性position: relative;z-index: -999;
        7.clip-path 裁剪 clip-path: polygon(0 0, 0 0, 0 0, 0 0);
          

## 11.添加、删除、替换、插入到某个节点的方法（js、jq）
        js：
        Document.createELement('div'); //创建一个新的节点
        appendChild()//添加节点
        removeChild()//删除节点
        insertBefore（插入节点，被插节点）//在某个节点之前插入
        replaceChild（新节点,旧节点）//替换节点（前替换后）
        jq：
        append() （旧节点添加新节点后面）（序列的末尾添加一个元素）
        appendTo() （新节点添加到旧节点后面）
        prepend() （旧节点添加新节点的前面）
        prependTo() （新节点添加到旧节点的前面）//添加
        remove()（//清空）
        empty()//删除
        replaceWith（）//替换
## 12.**JavaScript中的事件流模型**
        冒泡事件流：
        当触发一个节点的事件时，会从当前节点开始，依次触发其祖先节点的同类型事件，直到DOM根节点 。
        
        捕获事件流：
        当触发一个节点的事件时，会从DOM根节点开始，依次触发其祖先节点的同类型事件，直到当前节点自身 。
        
        当使用addEventListener绑定事件，第三个参数设为true时表示事件捕获，除此之外的所有事件均为事件冒泡
        例：（修改后面的true和false既可）
        <div id="div1">
        	111
            <div id="div2">
        		222
                <div id="div3">
        			333
        		</div>
            </div>
        </div>
        <script>
        div1.addEventListener("click",function(){
            console.log("div1 is 1 click");
        },false);
        div2.addEventListener("click",function(){
            console.log("div2 is 22click");
        },false);
        div3.addEventListener("click",function(){
            console.log("div3 is 333 click");
        },false);
## 13.**跨域问题是怎样产生的？** **解决方案有哪些？**
        同源策略（协议名，域名，端口号（出于安全考虑））
       Jsonp ，代理， cors，后端配置传 /api
       1，20 ，融汇贯通，
       2，数组去重，
       3，实现防抖节流的代码案例

## 14.*闭包有什么缺陷？**

    　 1.闭包会导致内存泄漏问题，因为被捕获的变量无法被垃圾回收。

　　   2.由于闭包会持有外部变量的引用，因此在使用闭包时需要小心，以避免出现意外的副作用或不良影响。

　　   3.闭包的性能不如普通函数，因为它需要在每次调用时查找作用域链（赋值为null）

## 15 **JavaScript中的本地对象、内置对象和宿主对象**（三星下）

     本地对象：
     简单来说，本地对象就是 ECMA-262（js） 定义的类（引用类型）。它们包括：
     Object, Function,Array,String,Boolean.Number,Date...等等
     
     内置对象：
     其中Global和Math这两个对象又被称为“内置对象”，这两个对象在脚本程序初始化时被创建，不必实例化这两个对象。
     Global对象是ECMAScript中最特别的对象，因为实际上它根本不存在，但大家要清楚，在ECMAScript中，不存在独立的函数，
     所有函数都必须是某个对象的方法。类似于isNaN()、parseInt()和parseFloat()方法等

     宿主对象：
     浏览器对象有很多，如Window和Document等等。（所有 BOM 和 DOM 对象都是宿主对象。）

     自定义对象
     顾名思义，就是开发人员自己定义的对象。JS允许使用自定义对象，使JS应用及功能得到扩充

## 16  ajax 请求数据时get和post方式有什么区别**  


       $.get() 方法使用GET方法来进行异步请求的。   

       $.post() 方法使用POST方法来进行异步请求的。

      get请求会将参数跟在URL后进行传递

      而POST请求则是作为HTTP消息的实体内容发送给Web服务器的，这种传递是对用户不可见的。

      get方式传输的数据大小不能超过2KB 而POST要大的多

      GET 方式请求的数据会被浏览器缓存起来，因此有安全问题。

## 17 **new操作符具体干了什么**

     答
    ①创建一个空对象，并且this 变量引用该对象，同时还继承了该函数的原型。
    
    ②属性和方法被加入到this 引用的对象中。

## 18**form中的input可以设置为readonly和disable，请问2者有什么区别？**

      readonly不可编辑，但可以选择和复制；值可以传递到后台
      disabled不能编辑，不能复制，不能选择；值不可以传递到后台
## 19**简述ajax 流程**

      1)客户端产生js的事件
      2)创建XMLHttpRequest对象
      3)对XMLHttpRequest进行配置
      4)通过AJAX引擎发送异步请求
      5)服务器端接收请求并且处理请求，返回html或者xml内容
      6)XML调用一个callback()处理响应回来的内容
      7)页面局部刷新
## 20，**js 数组常用方法**

	   1.pop（） 删除并返回数组的最后一个元素
       2.push()    表示向数组的末尾添加一个或多个元素
       3.shift()    表示删除并返回数组的第一个元素
       4.splice()   删除一个元素并且向删除的元素位置添加一个新元素
       5.unshift()  表明向数组的开头添加一个元素或多个元素并且返回新的长度
       6.sort()    表明对数组的元素进行排序，一般是升序排列
       7.reverse()   表示颠倒数组中元素的顺序
       8.toString()    表示把数组转化为字符串并返回结果
       9.slice()    表示从某个已有的数组返回选定的元素
       10.join()     把数组的所有元素放入一个字符串
       11.indexOf(el)   从头（序号0）开始查找元素 
       12.lastIndexOf(el)   从尾部（序号1）开始查找元素
## 1 .介绍JavaScript的数据类型
       值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol（独一无二的值）。
        引用数据类型：对象(Object)、数组(Array)、函数(Function)。
        注：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。
## 2 .判断 js 类型的方式
        1. typeof
        可以判断出'string','number','boolean','undefined','symbol'
        但判断 typeof(null) 时值为 'object'; 判断数组和对象时值均为 'object'
        2. instanceof
        原理是构造函数的 prototype 属性是否出现在对象的原型链中的任何位置
        function A() {}
        let a = new A();
        a instanceof A     //true,因为 Object.getPrototypeOf(a) === A.prototype;
        3. Object.prototype.toString.call()

        常用于判断浏览器内置对象,对于所有基本的数据类型都能进行判断，即使是 null 和 undefined

        Object.prototype.toString.call(null)//"[object Null]"
        Object.prototype.toString.call(undefined)//"[object Undefined]"
        Object.prototype.toString.call(Object)//"[object Function]"
        4. Array.isArray()

         用于判断是否为数组。

         typeof运算符和instanceof运算符以及isPrototypeOf()方法的区别
         typeof是一个运算符，用于检测数据的类型，比如基本数据类型null、undefined、string、number、boolean，以及引用数据类型object、function，但是对于正则表达式、日期、数组这些引用数据类型，它会全部识别为object

         instanceof同样也是一个运算符，它就能很好识别数据具体是哪一种引用类型。它与isPrototypeOf的区别就是它是用来检测构造函数的原型是否存在于指定对象的原型链当中；

         而isPrototypeOf是用来检测调用此方法的对象是否存在于指定对象的原型链中，所以本质上就是检测目标不同。

## 3 .NaN 是什么
         NaN 即非数值（Not a Number），NaN 属性用于引用特殊的非数字值，该属性指定的并不是不合法的数字。

          NaN 属性 与 Number.Nan 属性相同。

          提示： 请使用 isNaN() 来判断一个值是否是数字。原因是 NaN 与所有值都不相等，包括它自己。

## 4 .什么是事件代理/事件委托？
     冒泡型事件：事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发。

     捕获型事件：事件从最不精确的对象(document 对象)开始触发，然后到最精确(也可以在窗口级别捕获事件，不过必须由开发人员特别指定)。

     在添加事件时用addEventListener(event,fn,useCapture)方法，基中第3个参数useCapture是一个Boolean值，用来设置事件是在事件捕获时执行，还是事件冒泡时执行。

## 5 .如何阻止事件冒泡？
      <!-- w3c的方法是e.stopPropagation()，IE则是使用e.cancelBubble = true。例如：

      window.event.cancelBubble = true；
      e.stopPropagation(); -->
      1.event.stopPropagation()方法
      这是阻止事件的冒泡方法，不止事件向document上蔓延，但是默认事件任然会执行，当你调用这个方法的时候，如果点击一个连接，这个连接仍然会被打开

     
      3.return false;
      这个方法比较暴力，他会同时阻止事件冒泡也会阻止默认事件，不仅阻止了事件往上冒泡，而且阻止了事件本身

## 6 .如何阻止默认事件？
     w3c的方法是e.preventDefault()，IE则是使用e.  returnValue = false，比如：

     <!-- function stopDefault( e ) { 
     if ( e && e.preventDefault )         
       e.preventDefault(); //IE中阻止函数器默认动作的方式  
      else          
       window.event.returnValue = false; 
      } -->

      2.event.preventDefault()方法
      这是阻止默认事件的方法，调用此方法时，链接不会被打开，但是会发生冒泡，冒泡会传递到上一层的父元素


## 7 .谈谈this的理解
     1) this总是指向函数的直接调用者（而非间接调用者）

     2) 如果有new关键字，this指向new出来的那个对象

     3) 在事件中，this指向目标元素，特殊的是IE的attachEvent中的this总是指向全局对象window。
## 8 .call，apply，bind的区别
    .第一个参数都是指定函数内部中this的指向（函数执行时所在的作用域），然后根据指定的作用域，调用该函数。

    2.都可以在函数调用时传递参数。call，bind方法需要直接传入，而apply方法需要以数组的形式传入。

    3.call，apply方法是在调用之后立即执行函数，而bind方法没有立即执行，需要将函数再执行一遍。

    4.改变this对象的指向问题不仅有call，apply，bind方法，也可以使用that变量来固定this的指向。
## 9 .什么是window对象? 什么是document对象?
    window对象代表浏览器中打开的一个窗口。document对象代表整个html文档。实际上，document对象是window对象的一个属性。
## 10 . 介绍 js 有哪些内置对象？
     js 中的内置对象主要指的是在程序执行前存在全局作用域里的由 js 定义的一些全局值属性、函数和用来实例化其他对象的构造函数对象。

    一般我们经常用到的如全局变量值 NaN、undefined，全局函数如 parseInt()、parseFloat() 用来实例化对象的构造函数如 Date、Object 等，还有提供数学计算的单体内置对象如 Math 对象。
