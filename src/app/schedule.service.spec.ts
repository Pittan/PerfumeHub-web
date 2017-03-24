import { TestBed, async, inject } from '@angular/core/testing';

import { ScheduleService } from './schedule.service';

import { HttpModule, BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Schedule } from './schedule';

describe('ScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleService,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend, BaseRequestOptions]
    });
  });

  it('should ...', inject([ScheduleService], (service: ScheduleService) => {
    expect(service).toBeTruthy();
  }));

  it('userInfo', async(inject([ScheduleService, MockBackend], (schedule: ScheduleService, backend: MockBackend) => {

    backend.connections.subscribe((conn: MockConnection) => {
      const ops = new ResponseOptions({body: {'schedule' : [{body: 'hogehoge'}, {body: 'foobar'}]} });
      conn.mockRespond(new Response(ops));
    });

    schedule.fetchSchedule().subscribe((schedules: Schedule[]) => {
      expect(schedules).not.toBeNull();
      expect(schedules[0].body).toBe('hogehoge');
    });

  })));
});
