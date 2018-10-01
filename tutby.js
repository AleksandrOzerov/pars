let arr =[]; 
let articles = document.querySelectorAll('.aside-group .news-entry'); 
articles.forEach(function(news){ 
    arr.push({
        title: news.querySelector('.entry-head._title').innerHTML,
        href: news.querySelector('.entry__link.io-block-link').href,
        count: news.querySelector('.entry-count') ? +news.querySelector('.entry-count').innerHTML.replace(/\D+/ig, '') : 0,
        id: +news.getAttribute('data-id')
        });
console.log(arr);
}
   )
