import { CardType } from "./card";
import { ResponseState } from "./response";

export interface CardData {
  data: CardType[];
  statusCode: ResponseState;
}