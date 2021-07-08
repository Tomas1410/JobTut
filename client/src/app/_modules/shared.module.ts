import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    NgxGalleryModule

  ],
  exports: [
    TabsModule,
    BsDropdownModule,
    ToastrModule,
    NgxGalleryModule
  ]
})
export class SharedModule { }
