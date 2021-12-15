import {Reducer} from "redux";
import {Cart} from "./types";

const INITIAL_VALUE: Cart = {
  items: []
}

export const cart: Reducer<Cart> = () => INITIAL_VALUE
