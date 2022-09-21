var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector("main")
console.log(mainEl)


mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks! </h1>'

mainEl.classList.add('flex-ctr')

let topMenuEl = document.querySelector("#top-menu")
console.log(topMenuEl)


topMenuEl.style.height = "100px";
topMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
topMenuEl.classList.add('flex-around')




menuLinks.forEach(item =>{
let aTag = document.createElement("a")
// let pTag = document.createElement("p")
aTag.setAttribute("href",item.href)
aTag.innerText = item.text
console.log(aTag)
 topMenuEl.append(aTag)
})

