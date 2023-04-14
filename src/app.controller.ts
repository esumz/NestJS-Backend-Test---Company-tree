import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import _ = require('lodash');
import Axios from "axios";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/companies/travel-cost')
  async getCompaniesTravelCost(): Promise<any[]> {
    let companiesResult = await this.appService.getDataCompanies()
    const companies = companiesResult.data || [];
    let travelsResult = await this.appService.getDataTravels()
    let travels = travelsResult.data || [];
    let costTravels = this.appService.costTravelsByCompanies(travels)
    companies.forEach((i) => {
      i.cost = 0
      if(i.id && costTravels[i.id]) {
        i.cost = costTravels[i.id]
      }
    })
    return this.appService.unflatten(companies);
  }

  @Get('/companies/travel-cost/:id')
  async getTravelCost(@Param() params): Promise<any[]> {
    let companiesResult = await this.appService.getDataCompanies()
    const companies = companiesResult.data || [];
    let travelsResult = await this.appService.getDataTravels()
    let travels = travelsResult.data || [];
    let costTravels = this.appService.costTravelsByCompanies(travels)
    const objdata = {}
    companies.forEach(i => {
      i.cost = 0
      if(i.id && costTravels[i.id]) {
        i.cost = costTravels[i.id]
      }
      if(i.parentId == '0'){
        objdata[i.id] = `${i.id}_`
      } else {
        if(objdata[i.parentId]){
          objdata[i.id] = `${objdata[i.parentId]}${i.id}_` 
        } else {
          objdata[i.id] = i.id
        }
      }
      i.keyMap = objdata[i.id]
    })
    const companiesById = this.appService.find(params.id, companies )
    let sumTravelCost = _.sumBy(companiesById, 'cost')
    _.forEach(companiesById, (i) => {
      if(i.id == params.id){
        i.cost = sumTravelCost
      }
    })
    return this.appService.unflatten(companiesById);
  }
}
