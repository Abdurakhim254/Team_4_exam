import {createCustomerTable} from "./customer/auth.schema.js"
import {createAddressTable} from "./address/address.schema.js"
import {createCustomerInteractionsTable} from "./customer_interactions/customer.interactions.schema.js"
import {createCustomNotestTable} from "./customer_notes/customer.notes.schema.js"
import {createDiscounttTable} from "./discounts/discount.schema.js"
import {createFeedbackTable} from "./feedback/feedback.table.js"
import {createOrder_itemsTable} from "./order.items/order.items.schema.js"
import {createOrdersTable} from "./orders/orders.schema.js"
import {createPaymenttTable} from "./payments/payment.schema.js"
import {createProductTable} from "./products/products.schema.js"
import {createOtpPasswordTable} from "./otp/otp.schema.js"


export const createAlltables=async()=>{
    try {
        await createCustomerTable()
        await createProductTable()
        await createFeedbackTable()
        await createAddressTable()
        await createCustomNotestTable()
        await createCustomerInteractionsTable()
        await createDiscounttTable()
        await createOrdersTable()
        await createOrder_itemsTable()
        await createPaymenttTable()
        await createOtpPasswordTable()
    } catch (error) {
        console.error(error.message)
    }
}

