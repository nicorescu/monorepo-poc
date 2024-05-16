import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-test-component-exported',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component-exported.component.html',
  styleUrl: './test-component-exported.component.css',
})
export class TestComponentExportedComponent {}
