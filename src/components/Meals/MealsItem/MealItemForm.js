import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef, useState } from 'react'
const MealItemForm=(props)=>{
    const [amountIsValid,setAmountIsValid]=useState(true)
    const amountInputRef=useRef()
    const submitHandler=event=>{
        event.preventDefault()

        const enteredAmount=amountInputRef.current.value
        const enteredAmountNumber=+enteredAmount
        if(enteredAmount.trim().length===0 ||
         enteredAmountNumber <1 ||
          enteredAmountNumber>5){
            setAmountIsValid(false)
            return;
        }
  props.onAddToCart(enteredAmountNumber)
      }
return(
    <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInputRef}
        label='Amount' input={{
            type:'number',
            id:'amount_'+ props.id,
            min:'1',
            max:'5',
            defaultValue:'1',
            step:'1'
        }}/>
        <button >+ Add</button>
        {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
    </form>
)
}
export default MealItemForm