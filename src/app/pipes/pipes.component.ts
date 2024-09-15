import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CustomPipe } from '../custom.pipe';
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe,CommonModule,CustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  title : string="Eeshu pratap singh"
  num=100
  currentDate=new Date();
}
