let arr = [];
let articles = document.querySelectorAll('.c-justin__ps.js-justin__ps a');
articles.forEach(function(article){
    arr.push({
  link: article.href,
  title:article.querySelector('p').innerHTML,
  category: article.querySelector('span').innerHTML.trim(),
  time: article.querySelector('.time.small-2').innerHTML,
    })
})
let world = arr.filter((obj) => obj.category == "World");
let sport = arr.filter((obj) => obj.category == "Business");
let business = arr.filter((obj) => obj.category == "Sport");
console.log("world array", world,"business array",business,"sport array", sport );