var page_getProperties = function () {
    var data =  { what: 'No VueJS data on this element' };
    var type = 'n';
    if($0 && $0.__vue__){
        data = $0.__vue__;
        var props = Object.getOwnPropertyNames(data);
        var copy = {__proto__: null};
        for (var i = 0; i < props.length; ++ i)
            copy[props[i]] = data[props[i]];

        var proto1 = Object.getPrototypeOf($0.__vue__);
        Object.keys(proto1).forEach(function(key){
            if(typeof copy[key] === 'undefined'){
                copy[key] = data[key];
            }
        });


        var proto2 = Object.getPrototypeOf(proto1);
        Object.keys(proto2).forEach(function(key){
            if(typeof copy[key] === 'undefined'){
                copy[key] = data[key];
            }
        })

        return copy;

    } else if ($0 && $0._vue_directives) {
        data = $0._vue_directives
        type = 'd';
    }



  // Make a shallow copy with a null prototype, so that sidebar does not
  // expose prototype.
  //var props = Object.getOwnPropertyNames(data);
  //var copy = {__proto__: null};
  //for (var i = 0; i < props.length; ++ i)
  //  copy[props[i]] = data[props[i]];
  return data;
};

function pane(sidebar) {

  function updateElementProperties() {
    sidebar.setExpression("(" + page_getProperties.toString() + ")()");
      //sidebar.setObject(page_getProperties());
  }

  updateElementProperties();

  chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);

}

chrome.devtools.panels.elements.createSidebarPane("Vue.js", pane);