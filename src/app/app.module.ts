import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { NewComponent } from './new/new.component';
import { CarteComponent } from './carte/carte.component';
import { PereComponent } from './component/pere/pere.component';
import { FilsComponent } from './component/fils/fils.component';
import { FormsModule } from '@angular/forms';
import { ColorfilsComponent } from './colorfils/colorfils.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ItemComponent } from './cv/item/item.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    NewComponent,
    CarteComponent,
    PereComponent,
    FilsComponent,
    ColorfilsComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    NgStyleComponent,
    MiniWordComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
