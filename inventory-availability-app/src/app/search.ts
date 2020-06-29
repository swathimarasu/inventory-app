export interface Search 
{
    availableCount: number,
    location: {
      id: number,
      name: string , 
      zipCode: string
    },
    productDetails: {
      deptId: number,
      deptName: string ,
      id: number,
      name: string
    }
  }