import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();
  newOnomatopia: string = '';
  ngOnInit() {
  }

  createOnommatopia(value: string): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }
}
