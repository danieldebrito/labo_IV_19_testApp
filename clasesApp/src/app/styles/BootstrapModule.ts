import { NgModule } from '@angular/core';
// componente a utilizar
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        NgbPaginationModule
    ],
    exports: [
        NgbAlertModule
    ],
})
export class BootstrapModule { }
