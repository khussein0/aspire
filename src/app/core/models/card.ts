export interface CardType {
    id: string;
    cardHolderName: string;
    cardNumber: string;
    expirationDate: string;
    cvvNumber: number;
    isHideInfo: boolean;
    isFrozen: boolean;
}