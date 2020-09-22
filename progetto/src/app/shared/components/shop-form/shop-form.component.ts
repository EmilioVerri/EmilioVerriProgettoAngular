import { ShopStep } from '../../../core/model/shop-step.interface';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Shop } from 'src/app/core/model/shop.interface';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.scss']
})
export class ShopFormComponent implements OnChanges {

  @Input()
  shop: Shop;

  @Output()
  formSubmitEvent: EventEmitter<Shop> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<Shop> = new EventEmitter();

  shopForm: FormGroup;
  stepsArray: ShopStep[] = []

  get stepsControl(): FormArray {
    return this.shopForm.get('steps') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.shopForm = this.fb.group({
      id: null,
      title: ['', Validators.required],
      description: ['', Validators.required],
      steps: this.fb.array([])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['shop'] && this.shop != null) {
      this.stepsArray = [...this.shop.steps];
      this.stepsControl.clear();
      this.stepsArray.forEach(step => {
        this.stepsControl.push(this.fb.group({
          id: step.id,
          done: step.done,
          title: [step.title, Validators.required]
        }));
      });
      this.shopForm.patchValue({
        id: this.shop.id,
        title: this.shop.title,
        description: this.shop.description
      })
    }
  }

  addStepToForm() {
    this.stepsArray.push({
      done: false,
      title: '',
      id: this.stepsArray.length
    });
    this.stepsControl.push(this.fb.group({
      done: false,
      title: ['', Validators.required]
    }));
  }

  removeStepToForm(index: number){
    this.stepsArray.splice(index, 1);
    this.stepsControl.removeAt(index);
  }

  confirmChanges() {
    this.formSubmitEvent.emit(this.shopForm.value);
  }

  cancel() {
    this.undoEvent.emit(this.shopForm.value);
  }

}
