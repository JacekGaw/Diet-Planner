import React from 'react';

const PlanListItem = ({planInfo}) => {

    console.log(planInfo);

    return ( 
        <div className='flex justify-between w-full p-2'>
            <div>
                <header>
                    <h3>{planInfo.title}</h3>
                </header>
                <p>Date: {planInfo.date_created}, duration: {planInfo.days.length}</p>
            </div>
            <div></div>
        </div>
    );
}
 
export default PlanListItem;