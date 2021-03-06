function removeOrderItem(orderInfo, position){
    if(Array.isArray(orderInfo.items))
    {
        let noOfItems = orderInfo.items.length;
        let total = 0;
        let done = false;
        //validare pozitie
        if(position >= noOfItems) 
        {
            throw new Error(`Invalid position`);
        }
        else
        {

            for(poz = 0; poz < noOfItems; poz++)
            {
                //validare campuri items
                if(('price' in orderInfo.items[poz]) && ('quantity' in orderInfo.items[poz]))
                {
                    //eliminare item
                    if(poz == position && done == false)
                    {
                        done = true;
                        orderInfo.items.splice(poz, 1);
                        poz -= 1;
                        noOfItems -= 1;
                    }
                    else
                    
                        total += orderInfo.items[poz].price * orderInfo.items[poz].quantity;
                }
                else
                {   
                    throw new Error(`Malformed item`);
                }
            
            }
            orderInfo.total = total;
            return orderInfo;
        }
    }
    else
    {
        throw new Error(`Items should be an array`);
    }
  
}

const app = {
    removeOrderItem
};

module.exports = app;
