import { TestBed } from '@angular/core/testing';

import { SkillService } from './skill/skill.service';

describe('SkillServiceService', () => {
  let service: SkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
