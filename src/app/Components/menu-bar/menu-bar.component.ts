import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data , ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
/*pipe(
           map((data: Users[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )*/