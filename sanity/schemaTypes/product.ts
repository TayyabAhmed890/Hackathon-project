export const Products = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name:'name',
        title:'Name',
        type: 'string',
        validation: (rule: any) => rule.required()
    },
    {
      name: 'order',
      type: 'number',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'string'
    },
    {
        name: 'price',
        title: 'Price',
        type: 'string'
    },
    {
       name:'image',
       title:'Image',
       type:'image',
    }
      // Add more fields as needed
    ],
  }