let arr = [];
let articles = document.querySelector('.c-justin__ps.js-justin__ps').querySelectorAll('a');
articles.forEach(function(article){
    arr.push({
  link: article.href,
  title:article.querySelector('p').innerHTML,
  category: article.querySelector('span').innerHTML.trim(),
  time: article.querySelector('.time.small-2').innerHTML,
    })
})
//фильтрация массива arr
//создайем новый массив let world. Параметром функции является объект obj. В obj мы получаем нужный объект и работаем с ним.
let world = arr.filter(function(obj){
    //получаем все объекты которые имеют свойство obj.category == "World"
   return obj.category == "World";
    });
let business = arr.filter(function(obj){
    return obj.category == "Business";
});
let sport = arr.filter(function(obj){
    return obj.category == "Sport";
});
console.log("world array", world,"business array",business,"sport array", sport );
    


//////////////////////////////////////////



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
    

///////////////////////////////////////////

let sport = [];
let world = [];
let business = [];
let articles = document.querySelector('.c-justin__ps.js-justin__ps').querySelectorAll('a');
articles.forEach(function(article){
    switch (article.querySelector('span').innerHTML.trim()){
    case "World" :
   world.push({
  link: article.href,
  title:article.querySelector('p').innerHTML,
  category: article.querySelector('span').innerHTML.trim(),
  time: article.querySelector('.time.small-2').innerHTML,
      })
      break;
      case "Sport" :
    sport.push({
        link: article.href,
        title:article.querySelector('p').innerHTML,
        category: article.querySelector('span').innerHTML.trim(),
        time: article.querySelector('.time.small-2').innerHTML,
            }) 
            break;
       case "Business":
      business.push({
        link: article.href,
        title:article.querySelector('p').innerHTML,
        category: article.querySelector('span').innerHTML.trim(),
        time: article.querySelector('.time.small-2').innerHTML,
            })  
//console.log("world array", world,"business array",business,"sport array", sport );
}})


