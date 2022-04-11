import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { OfferComponent } from './offer/offer.component';
import { RouterModule } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditGuard } from '../shared/guards/edit.guard';

@NgModule({
  declarations: [
    EditFormComponent,
    CreateFormComponent,
    OfferComponent,
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EditGuard
  ],
  exports: [
    CreateFormComponent,
    EditFormComponent,
    OfferComponent,
    DetailsPageComponent
  ]
})
export class OffersModule { }
