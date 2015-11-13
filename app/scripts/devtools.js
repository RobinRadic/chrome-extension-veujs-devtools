var page_getProperties = function () {
  var data = $0 && $0.__vue__ ? $0.__vue__ :
    $0 && $0._vue_directives ? $0._vue_directives :  {what: 'no vue stuff found on element'};

  // Make a shallow copy with a null prototype, so that sidebar does not
  // expose prototype.
  var props = Object.getOwnPropertyNames(data);
  var copy = {__proto__: null};
  for (var i = 0; i < props.length; ++ i)
    copy[props[i]] = data[props[i]];
  return copy;
};

function pane(sidebar) {

  function updateElementProperties() {
    sidebar.setExpression("(" + page_getProperties.toString() + ")()");
  }

  updateElementProperties();

  chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);

}

chrome.devtools.panels.elements.createSidebarPane("Vue.js", pane);