import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
            parent: CoreModule
    ) {
        if (parent) {
            this.OnceCreationError();
        }
    }

    private OnceCreationError(): never {
        throw new Error(
            'CoreModule has already been loaded. Import Core modules in the AppModule only.'
        );
    }
}
