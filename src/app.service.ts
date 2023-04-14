import { Injectable } from '@nestjs/common';
import Axios from "axios";


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getDataCompanies(): Promise<any> {
    return  Axios.get('https://5f27781bf5d27e001612e057.mockapi.io/webprovise/companies', {});
  }

  async getDataTravels(): Promise<any> {
    return  Axios.get('https://5f27781bf5d27e001612e057.mockapi.io/webprovise/travels', {});
  }

  costTravelsByCompanies( travelsData): any {
    const objSumTravels = {}
    travelsData.forEach((i)=> {
      if(objSumTravels[i.companyId]){
        objSumTravels[i.companyId] += parseFloat(i.price)
      } else {
        objSumTravels[i.companyId] = parseFloat(i.price)
      }
    })
    return objSumTravels;
  }

  unflatten(data): any[] {
    const tree = data.map(e => ({...e}))
        .sort((a, b) => a.id - b.id)
        .reduce((a, e) => {
          a[e.id] = a[e.id] || e;
          a[e.parentId] = a[e.parentId] || {};
          const parent = a[e.parentId];
          parent.children = parent.children || [];
          parent.children.push(e);
          return a;
        }, {})
      ;
    return Object.values(tree).find(e => e.id === undefined).children;
  };

  find(id: number, companiesData: any): any {
    const company = companiesData.filter((c) => c.keyMap.indexOf(`${id}_`) >= 0);
    return company;
  }
}
