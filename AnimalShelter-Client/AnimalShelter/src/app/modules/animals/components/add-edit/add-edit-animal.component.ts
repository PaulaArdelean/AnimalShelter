import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from 'src/app/_services/animal.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Animal } from 'src/app/_models/animal';

@Component({
  selector: 'app-add-edit-animal',
  templateUrl: './add-edit-animal.component.html'
})

export class AddEditAnimalComponent implements OnInit {
  public animal: Animal;
  public isEdit = false;

  public animalForm = new FormGroup({
    type: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required),
  }, { validators: [] });

  constructor(private router: Router, private route: ActivatedRoute, private animalService: AnimalService, 
              public modalService: NgbModal) { }
  ngOnInit(): void {
    const animalId = this.route.snapshot.params.id;
    this
      .animalService
      .getAnimal(animalId)
      .subscribe(resp => {
        console.log('animal', resp);
      });
    if (this.animal !== null && this.animal !== undefined && this.animal.id > 0) {
      this.isEdit = true;
      this.animalForm.clearValidators();
      this.animalForm.patchValue(this.animal);
    }
  }

  public submitAnimalForm(): void {
    this.addAnimal();
  }

  private addAnimal(): void {
    if (!this.animalForm.valid) {
      alert('Completati campurile obligatorii.');
    } else {
      this.animalService.addAnimal(this.animalForm.value as Animal).subscribe((resp) => {
        console.log(resp);
        this.router.navigate(['/']);
      }, (error) => {
        alert(`${error.error}`);
      });
    }
  }
}
