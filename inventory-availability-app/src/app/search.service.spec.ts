import {SearchService} from "./search.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {of} from "rxjs";
import {Search} from "./search";

describe('search service', ()=> {
    let service:SearchService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        service = TestBed.inject(SearchService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should return empty list if args are emty ', () => {
        const results$ = service.searchProducts('', '');
        results$.subscribe( (productList) => {
            expect(productList).toEqual([]);
        })
    })
    it('should call the service with name set and not deptName', () => {
        const name = 'Mask';

        const results$ = service.searchProducts(name, '');
        results$.subscribe( (list) => {
            expect(list).toEqual([]);
        })
        const req = httpTestingController.expectOne('http://localhost:9090/products/availability/list?department=&product=Mask');
        expect(req.request.method).toEqual('GET');
        req.flush([]);
    })
    it('should call the service without name and with deptName set', () => {
        const deptName = 'Health';

        const results$ = service.searchProducts('', deptName);
        results$.subscribe( (list) => {
            expect(list).toEqual([]);
        })
        const req = httpTestingController.expectOne('http://localhost:9090/products/availability/list?department=Health&product=');
        expect(req.request.method).toEqual('GET');
        req.flush([]);
    })
    it('should call the service with name and deptName set', () => {
        const deptName = 'Health';
        const name = 'Mask'
        const results$ = service.searchProducts(name, deptName);
        results$.subscribe( (list) => {
            expect(list).toEqual([]);
        })
        const req = httpTestingController.expectOne('http://localhost:9090/products/availability/list?department=Health&product=Mask');
        expect(req.request.method).toEqual('GET');
        req.flush([]);
    })
})
