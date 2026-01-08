/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAllCustomer(): Customer[] {
        return this.customers;
    }

    createCustomer(createCustomerDTO: CreateCustomerDto): Customer {
        const newCustomer: Customer = {
            id: Date.now(),
            ...createCustomerDTO
        }
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
