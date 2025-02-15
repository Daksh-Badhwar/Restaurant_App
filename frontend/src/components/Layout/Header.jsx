import classes from './Header.module.css';
import meals from '../../assets/meals.jpg'
import { Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    
    return (
        <Fragment >
            <header className={classes.header}>
                <h1>ReactMeal</h1>
                <HeaderCartButton onShow={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="Deliciously served !" />
            </div>
        </Fragment>
    );
}

export default Header;