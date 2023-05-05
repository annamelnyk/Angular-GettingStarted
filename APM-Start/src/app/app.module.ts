import { StarComponent } from './shared/star.component';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
