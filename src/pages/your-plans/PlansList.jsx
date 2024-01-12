import React, {useContext} from 'react';
import {MealPlanContext} from '../../store/meal-plan-context';
import PlanListItem from './PlanListItem';

const PlansList = () => {
    const { plans } = useContext(MealPlanContext);

    return ( 
        <ul>
            {plans.map((plan, index) => {
                return <li key={index}><PlanListItem planInfo={plan} /></li>
            })}
        </ul>
    );
}
 
export default PlansList;