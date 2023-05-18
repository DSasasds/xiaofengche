                                          js面试题
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
      答：
    　1.闭包会导致内存泄漏问题，因为被捕获的变量无法被垃圾回收。

　　  2.由于闭包会持有外部变量的引用，因此在使用闭包时需要小心，以避免出现意外的副作用或不良影响。

　　  3.闭包的性能不如普通函数，因为它需要在每次调用时查找作用域链（赋值为null）
      注意：此说法不一定正确，因为 IE。IE 有 bug，IE 在我们使用完闭包之后，依然回收不了闭包里面引用的变量。
## 15 **JavaScript中的本地对象、内置对象和宿主对象**（三星下）

     本地对象：
     简单来说，本地对象就是 ECMA-262（js） 定义的类（引用类型）。它们包括：
     Object, Function,Array,String,Boolean.Number,Date...等等
     
     内置对象：
     其中Global和Math这两个对象又被称为“内置对象”，这两个对象在脚本程序初始化时被创建，不必实例化这两个对象。
     Global对象是ECMAScript中最特别的对象，因为实际上它根本不存在，但大家要清楚，在ECMAScript中，不存在独立的函数，所有函数都必须是某个对象的方法。类似于isNaN()、parseInt()和parseFloat()方法等

     宿主对象：
     浏览器对象有很多，如Window和Document等等。（所有 BOM 和 DOM 对象都是宿主对象。）

     自定义对象
     顾名思义，就是开发人员自己定义的对象。JS允许使用自定义对象，使JS应用及功能得到扩充

## 16  ajax 请求数据时get和post方式有什么区别**  


       $.get() 方法使用GET方法来进行异步请求的。   

       $.post() 方法使用POST方法来进行异步请求的。

      get请求会将参数跟在URL后进行传递，get方式传输的数据大小不能超过2KB

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
