import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  apiInfo!: any;
  constructor(private apiservice: ApiService) { }
  ngOnInit(): void {
    this.apiservice.getData().subscribe((res: any) => {
      this.apiInfo = res;
      console.log(this.apiInfo);



    });

  }


}
