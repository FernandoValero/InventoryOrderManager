import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SessionStateService } from '../../services/session-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userSignUp: User = new User(); //usuario mapeado al formulario
  userSignIn: User = new User();
  returnUrl!: string;
  msglogin!: string; // mensaje que indica si no paso el loguin
  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              private sessionStateService: SessionStateService) {
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'suppliers';
    this.loadScript();
  }

  loadScript() {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'assets/scripts.js';
    scriptElement.onload = () => {
      console.log('Script loaded successfully');
    };
    scriptElement.onerror = () => {
      console.error('Error loading script');
    };
    document.body.appendChild(scriptElement);
  }

  login() {
    this.loginService.login(this.userSignUp.userName, this.userSignUp.password)
      .subscribe(
        (result) => {
          var user = result;
          if (user.status == 1) {

            //guardamos el user en cookies en el cliente
            sessionStorage.setItem("user", user.userName);
            sessionStorage.setItem("userId", user.userId);
            sessionStorage.setItem("role", user.role);

            //carga los datos del usuario en el BehaviorSubject
            this.sessionStateService.loadUser();

            //redirigimos a home o a pagina que llamo
            this.router.navigateByUrl(this.returnUrl);
          } else {

            //usuario no encontrado muestro mensaje en la vista
            this.msglogin = "Credenciales incorrectas..";
          }
        },
        error => {
          alert("Error de conexion");
          console.log("error en conexion");
          console.log(error);
        });
  }

}
