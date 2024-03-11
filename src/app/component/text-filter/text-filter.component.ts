import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Option, TextFilterOptions } from '../../models/types.type';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrl: './text-filter.component.scss',
})
export class TextFilterComponent {
  @Input() filterOptions!: TextFilterOptions;
  @Output() selectionChange = new EventEmitter<any>();

  selectedValue!: string;
  dropdownVisible = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectOption(value: Option) {
    this.selectedValue = value.text;
    this.dropdownVisible = false;
    this.selectionChange.emit(value);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-dropdown')) {
      this.dropdownVisible = false;
    }
  }
}
