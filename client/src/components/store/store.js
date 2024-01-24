import { configureStore } from "@reduxjs/toolkit";
import CreateBasket from "./CreateBasket";

const store = configureStore(
    {
        reducer:{basket:CreateBasket}
    }
)
export default store