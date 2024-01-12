import React, {useContext} from 'react';
import {MealPlanContext} from '../../store/meal-plan-context';
import PlanListItem from './PlanListItem';

const PlansList = ({onPlanClick}) => {
    const { plans } = useContext(MealPlanContext);

    const handlePlanClick = (planID) => {
        onPlanClick(planID);
    }
    return ( 
        <ul className='max-w-screen-md mx-auto z-50'>
            {plans.map((plan, index) => {
                return <li key={index} onClick={() => handlePlanClick(plan.id)}><PlanListItem planInfo={plan} /></li>
            })}
        </ul>
    );
}
 
export default PlansList;