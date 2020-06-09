import {Directive, Input, ElementRef, OnInit, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Directive({
    selector: '[appMedia]'
})
export class MediaDirective implements OnInit, OnDestroy {
    @Input() appMedia: any;
    private subscription;
    constructor(
        private el: ElementRef,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private breakpoint: BreakpointObserver
    ) {
    }

    ngOnInit(): void {
        if (this.appMedia === 'large') {
            this.subscription = this.breakpoint
                .observe(['(min-width: 768px)'])
                .subscribe((state: BreakpointState) => {
                    state.matches ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
                });

        }
        if (this.appMedia === 'small') {
            this.subscription = this.breakpoint
                .observe(['(max-width: 767px)'])
                .subscribe((state: BreakpointState) => {
                    state.matches ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
                });
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
