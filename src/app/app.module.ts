import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderService } from './services/loader.service'; //loading screen
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { MyLoaderComponent } from './loader/my-loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


///////// COOKIE IMPORT
import { CookieService } from 'ngx-cookie-service';
//Bonds Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { BondsComponent } from './bondsFolder/bonds/bonds.component';
import { BondComponent } from './bondsFolder/bond/bond.component';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { SortDirective } from './bondsFolder/directive/sort.directive';


// import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';

//Stocks imports
import { StocksComponent } from './stocks/stocks.component';

//Location Imports
import { LocationComponent } from './locationsFolder/location/location.component';
import { LocationsComponent } from './locationsFolder/locations/locations.component';
import { RetcalcComponent } from './retcalc/retcalc.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Closed-End Funds Imports
import { EditFundsComponent } from './fundsPlace/editfunds/editfunds.component';
import { CreateFundsComponent } from './fundsPlace/createfunds/createfunds.component';
import { FundsComponent } from './fundsPlace/funds/funds.component';
import { FundComponent } from './fundsPlace/fund/fund.component';
import { SortDirective } from './directive/sort.directive';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { LearnComponent } from './learn/learn.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// ETF Imports
import { EtfComponent } from './etfFolder/etf.component';
import { DialogEtfComponent } from './etfFolder/dialog-etf/dialog-etf.component';
import { DialogSingleEtfComponent } from './etfFolder/dialog-single-etf/dialog-single-etf.component';

// Mutual Funds Imports
import { MutualFundsComponent } from './mutual_funds_content/mutual-funds/mutual-funds.component';


import { LoginComponent } from './usersFolder/login/login.component';
import { AccountsComponent } from './usersFolder/accounts/accounts.component';
import { RegisterComponent } from './usersFolder/register/register.component';
import { TokenComponent } from './usersFolder/token/token.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BondsComponent,
    BondComponent,
    EtfComponent,
    DialogEtfComponent,
    StocksComponent,
    LocationsComponent,
    LocationComponent,
    RetcalcComponent,
    EtfComponent,
    SocialmediaComponent,
    SortDirective,
    DialogSingleEtfComponent,
  
    EditFundsComponent,
    CreateFundsComponent,
    FundsComponent,
    FundComponent,

    MutualFundsComponent,

    SortDirective,
    MyLoaderComponent,
    LearnComponent,



    LoginComponent,
    AccountsComponent,
    RegisterComponent,
    TokenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatPaginatorModule,
    NgxPaginationModule,
    AngularMaterialModule,
    FormsModule,
    MatDialogModule,
    

    MatSortModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,



  ],

  entryComponents: [DialogEtfComponent, DialogSingleEtfComponent],
  providers: [
    CookieService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    NgxPaginationModule,
  ]
 

})
export class AppModule {
  constructor() {
    library.add(faFilm);
  }
}
