import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartdetalleComponent } from './pages/cartdetalle/cartdetalle.component';
import { MediosdepagoyenvioComponent } from './pages/mediosdepagoyenvio/mediosdepagoyenvio.component';
import { PreguntasfrecuentesComponent } from './pages/preguntasfrecuentes/preguntasfrecuentes.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [

{path: '',  component: DefaultComponent,
children: [
            {path: '', component: HomepageComponent},
            {path: 'productos', component: ProductsComponent, },
            {path: 'carrito', component: CartdetalleComponent, },
            {path: 'mediosdepagoyenvio', component: MediosdepagoyenvioComponent, },
            {path: 'preguntasfrecuentes', component: PreguntasfrecuentesComponent, },
            {path: 'nosotros', component: NosotrosComponent, },

            


          ],
},
{ path: 'register', component: RegisterComponent },
{ path: 'login'   , component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
