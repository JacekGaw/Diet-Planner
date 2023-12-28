import React, {useContext} from 'react';
import { RecipesContext } from '../../store/recipes-context';

const Home = () => {
    const {recipes}= useContext(RecipesContext);

    return ( 
        <>
        <h1>HomePage</h1>
        </>
    );
}
 
export default Home;