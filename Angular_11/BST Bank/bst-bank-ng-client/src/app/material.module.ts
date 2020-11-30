import { NgModule } from "@angular/core";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule} from '@angular/material/table';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { MatInputModule} from '@angular/material/input';
import { MatListModule} from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
    imports:[
        MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule,
        MatTableModule, MatCheckboxModule, MatRadioModule, MatInputModule,
        MatListModule, MatFormFieldModule, MatCardModule, MatMenuModule
    ],
    exports:[
        MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule,
        MatTableModule, MatCheckboxModule, MatRadioModule, MatInputModule,
        MatListModule, MatFormFieldModule, MatCardModule, MatMenuModule
    ]
})
export class MaterialModule{

}