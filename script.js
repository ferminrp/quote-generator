var app = new Vue({
  el: '#app',
  data: {
    quote: null,
    reference: null
  }
});

  function autoheight(x) {
    x.style.height = "5px";
    x.style.height = (15+x.scrollHeight)+"px";
  }