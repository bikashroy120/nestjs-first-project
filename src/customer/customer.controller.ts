/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerServices: CustomerService) { };

    @Get()
    getAll() {
        return this.customerServices.getAllCustomer();
    }

    @Post()
    create(@Body() data: CreateCustomerDto) {
        return this.customerServices.createCustomer(data); 
    }
}
