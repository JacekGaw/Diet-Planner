import React, {useEffect, useState} from 'react';

export const useGenerateShoppingList = (planID) => {
    const [shoppingList, setShoppingList] = useState(planID);

    return shoppingList;
};
 