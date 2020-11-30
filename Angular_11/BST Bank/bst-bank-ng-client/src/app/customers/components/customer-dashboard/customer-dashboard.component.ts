import { Component, OnInit } from '@angular/core';
import { IAccount, ICustomer } from '../../models/customer-model';
import { AccountService } from '../../services/accout.service';

@Component({
    selector: 'customer-dashboard',
    templateUrl: './customer-dashboard.component.html',
    styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

    customer: ICustomer;
    displayedColumns: string[] = ['accountNo', 'amount', 'accountType'];
    accounts: IAccount[];

    constructor(private accountSvc: AccountService) { }

    ngOnInit(): void {
        this.accountSvc.getCustomerInfo()
            .subscribe(
                (data: ICustomer) => {
                    this.customer = data;
                    this.accounts = data.accounts;
                },
                err => console.log(err)
            )
    }

}
