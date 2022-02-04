import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ContadorComponent } from "./contador/contador.component"

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]

    //se usa si usamos directivas de angular (ngIf, ngFor).
    // imports: [
       // CommonModule
    //]

})

export class ContadorModule{

}