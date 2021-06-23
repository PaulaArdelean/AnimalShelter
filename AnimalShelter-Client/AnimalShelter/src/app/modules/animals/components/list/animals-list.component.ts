import { OnInit, Component } from '@angular/core';
import { Animal } from 'src/app/_models/animal';
import { Router } from '@angular/router';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html'
})
export class AnimalsListComponent implements OnInit {
  public animals: Animal[] = [];
  public animalIdToDelete: number;
  private activeModal: NgbModalRef;

  constructor(private router: Router, private animalService: AnimalService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAnimals();
    if (!this.animals) {
      alert('A aparut o eroare!');
      this.router.navigate(['/']);
    }
  }

  private getAnimals(): void {
    this.animalService.getAllAnimals().subscribe(animals => {
      this.animals = animals;
    });
  }

  public stergeAnimal(): void {
    if (this.animalIdToDelete > 0) {
      this
        .animalService
        .deleteAnimal(this.animalIdToDelete)
        .subscribe(resp => {
          console.log('deleted animal: ', resp);
          this.getAnimals();
          this.activeModal.close();
        });
    }
  }

  public openAnimalDeleteModal(content: any, animalId: number): void {
    this.animalIdToDelete = animalId;
    this.activeModal = this
      .modalService
      .open(content);
  }
}
