import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));





// Primera pagina 
window.addEventListener("scroll", ()=>{
  let header:any = document.getElementById("header");
  header.classList.toggle("abajo", window.scrollY>400);
    
});







// Botones de edicion
// const login:any = document.getElementById("login");
// const forEdit:any = document.getElementsByClassName(".in-login");
// console.log(forEdit)
// login.addEventListener("click", ()=>{
//     forEdit.classList.add("nav-visible")
// })


