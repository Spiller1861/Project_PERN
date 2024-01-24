import {createSlice , createAsyncThuck} from "@reduxjs/toolkit"
const initialState = {
    basket:[],
    sum: 0,
    name:"",
    img:"https://i.pinimg.com/originals/64/f5/01/64f501db467c44445285591ab8ca8512.jpg",
    surname:"",
    number: "",
    adress: ""

}

const createStore  = createSlice(
    {
        name :"basket",
        initialState:initialState,
        reducers:{
        AddToBasket(state,action)
        {
            var boolIsAdd = true;
            state.basket.map((item)=>{
                if(item.id===action.payload.id)
                {
                    boolIsAdd =false
                    return 
                }
            })
    
           
            
            if(boolIsAdd)
            { 
                state.sum += action.payload.price;
                state.basket.push(action.payload)
            }
            else{
                alert("такой товар уже есть")
            }
            

        },
        DeleteFromBasket(state,action)
        {
            
     state.sum -= action.payload.price
            state.basket = state.basket.filter(
                (item)=>item.id!==action.payload.id
            )
        },
        Delete(state)
        {
            state.basket=[];
            state.sum=0;
        },
        ChangeName(state,action)
        {
            state.name = action.payload
        }
        ,
        ChangeSurname(state,action)
        {
            state.surname=action.payload
        }
        ,
        ChangeAdress(state,action)
        {
            state.adress=action.payload
        }
        ,
        ChangeNumber(state,action)
        {
            state.number=action.payload
        }
        }
    }
)
export const { AddToBasket, DeleteFromBasket, Delete,ChangeName,ChangeSurname,ChangeAdress,ChangeNumber
} = createStore.actions;
export default createStore.reducer