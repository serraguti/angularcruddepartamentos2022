import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class DepartamentosService {
    constructor(private _http: HttpClient){}

    getDepartamentos(): Observable<any>{
        
    }
}