import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { BondsComponent } from './bonds/bonds.component';
import { BondComponent } from './bond/bond.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { StocksComponent } from './stocks/stocks.component';
=======
=======
import { LocationsComponent } from './locationsFolder/locations/locations.component';
import { LocationComponent } from './locationsFolder/location/location.component';
>>>>>>> 6f5868c29fd6f6fb5c1ed717320151162d4f38ba
import { RetcalcComponent } from './retcalc/retcalc.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
>>>>>>> 5898bf434789d95abccc0296e96bd5552cf58b24


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BondsComponent,
    BondComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    StocksComponent,
=======
=======
    LocationsComponent,
    LocationComponent,
>>>>>>> 6f5868c29fd6f6fb5c1ed717320151162d4f38ba
    RetcalcComponent,
>>>>>>> 5898bf434789d95abccc0296e96bd5552cf58b24
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularMaterialModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor() {
      library.add(faFilm)
  }
}
