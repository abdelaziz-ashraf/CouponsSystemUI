import { Coupon } from "./coupon"

export interface Consumptions {
    id: number,
    usedCoupon: Coupon,
    orderCode:  String,
    priceBefore: number, 
    priceAfter: number, 
    consumedAt: Date
}