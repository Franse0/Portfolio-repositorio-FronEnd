import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(private portfolioService:PortfolioService){};
  skillsList:any;

  ngOnInit():void{
    this.portfolioService.obtenerDatos().subscribe(data=>{
      console.log("Reciebiendo datos del skills");
      this.skillsList=data.skills;
    })
  }
}
