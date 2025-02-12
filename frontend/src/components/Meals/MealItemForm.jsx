import React,{useContext} from 'react';
import classes from "./MealItemForm.module.css"
import Input from  "../UI/Input";
import  CartContext from "../../store/cart-context"
const MealItemForm=props=>{
const cartcntx = useContext(CartContext);
const addItemToCart= (event)=>{
  //update cartcntx.items

  event.preventDefault();  //as app loading
// cartcntx.items.push(props.id) wont work as it is pushed (main store not updated,only current instance updated) but when cart is rendered it is reinitialize tahts why we need state 
//its not deep copy its shallow copy
//deep copy
// const obj={a:1,b:2}
// const obj2= obj;
//obj.a=10
//console.log(obj2); //output  a:10 ,b:2
//shallow copy
//... //obj2={...obj} //output a:1,b:2
//but in case of function ,it is not like that as pointing to same reference so create function so reference get copied as functions are objects


const  quantity= document.getElementById("amount_" +props.id).value;
console.log(quantity);



cartcntx.addItem({...props.item, quantity:quantity});





}

return(
<form className={classes.form}>
    <Input
    label="Amount"
    input={{
      id:"amount_"+props.id,
      type:"number",
      min:"1",
      max:"5",
      step:"1",
      defaultValue:"1"
    }}>

    </Input>
    <button onClick={addItemToCart}>+ Add</button>


</form>
)}
export default MealItemForm;