export interface Search 
{
    availableCount: number,
    location: {
      id: number,
      name: string , 
      zipCode: number
    },
    productDetails: {
      deptId: number,
      deptName: string ,
      id: number,
      name: string
    }
  }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/