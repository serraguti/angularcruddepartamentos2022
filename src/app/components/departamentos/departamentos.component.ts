import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Departamento } from 'src/app/models/departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(private _service: DepartamentosService) { }

  ngOnInit(): void {
    this._service.getDepartamentos().subscribe(response => {
      this.departamentos = response;
    });
  }
}
