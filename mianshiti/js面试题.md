                                          js面试题
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
