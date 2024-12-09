import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SellersService } from '../service/sellers.service';

@Component({
  selector: 'app-sellers',
  standalone: false,
  
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent implements OnInit, AfterViewInit{

  public sellers : any;
  public dataSource : any;
  public displayedColumns = ['id', 'username', 'email']

  constructor(private sellerService : SellersService) {
    
  }

  ngOnInit(): void {
    this.sellerService.getAllSellers()
    //this.http.get(" http://localhost:8081/api/v1/usersByRole?role=SELLER")
    .subscribe({
      next : data => {
        this.sellers = data;
        this.dataSource = new MatTableDataSource(this.sellers);
      },
      error : err =>{
        console.log(err);
      }
    })
  }

  ngAfterViewInit(): void {
  }

}
