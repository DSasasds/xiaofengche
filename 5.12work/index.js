let module = (function() {
    //模块列表集合
    const moduleLists = {

    };
    function define(name, modules, action) {
      modules.map((m, i) => {
        modules[i] = moduleLists[m];
      });
      //执行并保存模块
      moduleLists[name] = action.apply(null, modules);
    }
  
    return { define };
  })();
  
  //声明模块不依赖其它模块
  module.define("mk1", [], function() {
    return {
      show() {
        console.log("mk1 module show");
      }
    };
  });
  
  //声明模块时依赖其它模块
  module.define("mk2", ["mk1"], function(mk) {
    mk.show();
  });