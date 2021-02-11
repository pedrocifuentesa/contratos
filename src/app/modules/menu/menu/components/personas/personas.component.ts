import { Component, OnInit } from '@angular/core';
import { ModelPersonas } from 'src/app/core/models/model_personas';
import { PersonasServicesService } from 'src/app/core/services/personasServices.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  personas =[];
  message;
  persona= ModelPersonas;
  data={"rut":"18569871-8"};
  constructor(private personaService : PersonasServicesService) { }

  ngOnInit() {
    
    this.getAll()
  let data  = {
    "rut":"18569871-8"
  }
  this.find(data);
  }


find(data) {
  this.personaService.find(data).subscribe(item =>{
    console.log(item['data']);
}, (err) => {
      //console.log(err);
  this.message = err.error.message;
});
}
getAll(){
  this.personaService.getall().subscribe(item =>{
    this.personas=item.data;
  let fecha;
   this.personas.forEach(item=>{

    fecha = new Date(item['fnacimiento']);

      fecha.setMonth(fecha.getMonth() + 1);
    
      item['fnacimiento']=fecha.getDate()+'-'+(fecha.getMonth()) +'-'+fecha.getFullYear();
      
    });
}, (err) => {
      //console.log(err);
  this.message = err.error.message;
});
}
create(persona){
this.personaService.create(persona).subscribe(item =>{
  console.log(item);
},(err)=>{this.message = err.error.message})
}
update(persona){
this.personaService.update(persona).subscribe(item =>{
  console.log(item);
},(err)=>{this.message = err.error.message})
}


}
