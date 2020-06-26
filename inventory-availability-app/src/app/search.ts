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