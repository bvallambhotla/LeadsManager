import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableHeader } from './directives/sortableHeader.directive';
import { ToastService } from './components/toast.service';
import { ToastsContainer } from './components/toast-container.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbToastModule],
  declarations: [SortableHeader, ToastsContainer],
  exports: [SortableHeader, ToastsContainer],
  providers: [ToastService],
})
export class CustomComponentsModule {}
