import { TestBed } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalDialogService } from './modal-dialog.service';

describe('ModalDialogService', () => {
  let service: ModalDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ModalDialogService,
        { provide: BsModalService, useValue: jasmine.createSpyObj('BsModalService', ['show']) },
      ],
    });
    service = TestBed.inject(ModalDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
