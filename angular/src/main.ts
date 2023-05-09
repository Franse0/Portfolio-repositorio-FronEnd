import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));












// Botones de edicion
// const login:any = document.getElementById("login");
// const forEdit:any = document.getElementsByClassName(".in-login");
// console.log(forEdit)
// login.addEventListener("click", ()=>{
//     forEdit.classList.add("nav-visible")
// })


