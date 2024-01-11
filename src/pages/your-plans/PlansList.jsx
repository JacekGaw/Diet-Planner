import React, {useContext} from 'react';
import {MealPlanContext} from '../../store/meal-plan-context';
import PlanListItem from './PlanListItem';

const PlansList = () => {
    const { plans } = useContext(MealPlanContext);

    return ( 
        <ul>
            {plans.map(plan => {
                return <PlanListItem key={plan.id} planInfo={plan} />
            })}
        </ul>
    );
}
 
export default PlansList;