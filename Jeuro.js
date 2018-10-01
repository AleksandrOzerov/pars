javascript: (function (e, s) {e.src= s; e.onload = function() {jQuery.noConflict(); console.log('jQuery injected')}; document.head.appendChild( e);}) (document.createElement( 'script'), '//code.jquery.com/jquery-latest.min.js');
let arr = [];
let articles = $(".c-justin__ps.js-justin__ps a");
$.each(articles, function(){
    arr.push({
        link:this.href,
        title:$("p",this).text(),
        category:$("span", this).text().trim(),
        time:$(".time.small-2", this).text()
    });  
});
let world =$.grep(arr, (obj)=>obj.category == "World");
let sport =$.grep(arr, (obj)=>obj.category == "Sport");
let business =$.grep(arr, (obj)=>obj.category == "Business");
console.log("world array", world,"business array",business,"sport array", sport );
