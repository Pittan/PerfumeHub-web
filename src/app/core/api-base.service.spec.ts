import { TestBed, inject, async } from '@angular/core/testing';

import { ApiBaseService } from './api-base.service';
import {
  HttpModule, BaseRequestOptions, Http, Response, ResponseOptions, ResponseType,
  RequestMethod
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('ApiBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ApiBaseService, {
        provide: Http,
        useFactory: (backend, options) => new Http(backend, options),
        deps: [MockBackend, BaseRequestOptions]
      }, MockBackend, BaseRequestOptions]
    });
  });

  it('Should initialize', inject([ApiBaseService], (service: ApiBaseService) => {
    expect(service).toBeTruthy();
  }));

  describe('GET', () => {
    const res = [{name: 'a'}, {name: 'b'}];

    it('パラメータなし', async(inject([MockBackend, ApiBaseService], (backend: MockBackend, service: ApiBaseService) => {
      backend.connections.subscribe((conn: MockConnection) => {
        expect(conn.request.url).toEqual('http://dev.api.pittankopta.net/pta/v3/hoge');
        expect(conn.request.method).toEqual(RequestMethod.Get);
        const ops = new ResponseOptions({body: res});
        conn.mockRespond(new Response(ops));
      });

      service.get('hoge', null)
          .subscribe( data => {
            const json = data.json();
            expect(json).toBe(res);
          });
    })));

    it('パラメータあり', async(inject([MockBackend, ApiBaseService], (backend: MockBackend, service: ApiBaseService) => {
      backend.connections.subscribe((conn: MockConnection) => {
        expect(conn.request.url).toEqual('http://dev.api.pittankopta.net/pta/v3/hoge?param1=foo&param2=bar');
        expect(conn.request.method).toEqual(RequestMethod.Get);
        const ops = new ResponseOptions({body: res});
        conn.mockRespond(new Response(ops));
      });

      service.get('hoge', {param1: 'foo', param2: 'bar'})
          .subscribe( data => {
            const json = data.json();
            expect(json).toBe(res);
          });
    })));
  });

  describe('POST', () => {
    const res = [{name: 'a'}, {name: 'b'}];

    it('パラメータなし', async(inject([MockBackend, ApiBaseService], (backend: MockBackend, service: ApiBaseService) => {
      backend.connections.subscribe((conn: MockConnection) => {
        expect(conn.request.url).toEqual('http://dev.api.pittankopta.net/pta/v3/hoge');
        expect(conn.request.method).toEqual(RequestMethod.Post);
        const ops = new ResponseOptions({body: res});
        conn.mockRespond(new Response(ops));
      });

      service.post('hoge', null)
          .subscribe( data => {
            const json = data.json();
            expect(json).toBe(res);
          });
    })));

    it('パラメータあり', async(inject([MockBackend, ApiBaseService], (backend: MockBackend, service: ApiBaseService) => {
      backend.connections.subscribe((conn: MockConnection) => {
        expect(conn.request.url).toEqual('http://dev.api.pittankopta.net/pta/v3/hoge');
        expect(conn.request.getBody()).toEqual('param1=foo&param2=bar');
        expect(conn.request.method).toEqual(RequestMethod.Post);
        const ops = new ResponseOptions({body: res});
        conn.mockRespond(new Response(ops));
      });

      service.post('hoge', {param1: 'foo', param2: 'bar'})
          .subscribe( data => {
            const json = data.json();
            expect(json).toBe(res);
          });
    })));
  });

  describe('PUT', () => {
    const res = [{name: 'a'}, {name: 'b'}];

    it('パラメータなし', async(inject([MockBackend, ApiBaseService], (backend: MockBackend, service: ApiBaseService) => {
      backend.connections.subscribe((conn: MockConnection) => {
        expect(conn.request.url).toEqual('http://dev.api.pittankopta.net/pta/v3/hoge');
        expect(conn.request.method).toEqual(RequestMethod.Put);
        const ops = new ResponseOptions({body: res});
        conn.mockRespond(new Response(ops));
      });

      service.put('hoge', null)
          .subscribe( data => {
            const json = data.json();
            expect(json).toBe(res);
          });
    })));

    it('パラメータあり', async(inject([MockBackend, ApiBaseService], (backend: MockBackend, service: ApiBaseService) => {
      backend.connections.subscribe((conn: MockConnection) => {
        expect(conn.request.url).toEqual('http://dev.api.pittankopta.net/pta/v3/hoge');
        expect(conn.request.getBody()).toEqual('param1=foo&param2=bar');
        expect(conn.request.method).toEqual(RequestMethod.Put);
        const ops = new ResponseOptions({body: res});
        conn.mockRespond(new Response(ops));
      });

      service.put('hoge', {param1: 'foo', param2: 'bar'})
          .subscribe( data => {
            const json = data.json();
            expect(json).toBe(res);
          });
    })));
  });

  describe('DELETE', () => {
    const res = [{name: 'a'}, {name: 'b'}];

    it('パラメータなし', async(inject([MockBackend, ApiBaseService], (backend: MockBackend, service: ApiBaseService) => {
      backend.connections.subscribe((conn: MockConnection) => {
        expect(conn.request.url).toEqual('http://dev.api.pittankopta.net/pta/v3/hoge');
        expect(conn.request.method).toEqual(RequestMethod.Delete);
        const ops = new ResponseOptions({body: res});
        conn.mockRespond(new Response(ops));
      });

      service.delete('hoge')
          .subscribe( data => {
            const json = data.json();
            expect(json).toBe(res);
          });
    })));

  });

});
