import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorFirebaseService {

  constructor() { }

  firebaseCodeError(code:String){
    switch(code){
      // Si el usuario no existe
      case 'auth/user-not-found':
      return 'El usuario no existe'
      // Si la contraseña es incorrecta
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta '
        // Si el usuario ya existe
        case 'auth/email-already-in-use':
          return 'El usuario ya existe'
          // Si la contraseña es demasiado debil
        case 'auth/weak-password':
          return 'La contraseña es muy debil'
          // Si el email es invalido
          case 'auth/invalid-email':
            return 'El email es ivalido'
      default:
        return 'Error desconocido'
    }

}

}
