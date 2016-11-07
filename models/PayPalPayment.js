{
    "intent": "sale",
    "payer": {
    "payment_method": "paypal"
},
    "transactions": [
    {
        "amount": {
            "total": "30.11",
            "currency": "USD",
            "details": {
                "subtotal": "30.00",
                "tax": "0.07",
                "shipping": "0.03",
                "handling_fee": "1.00",
                "shipping_discount": "-1.00",
                "insurance": "0.01"
            }
        },
        "description": "This is the payment transaction description.",
        "custom": "EBAY_EMS_90048630024435",
        "invoice_number": "48787589673",
        "payment_options": {
            "allowed_payment_method": "INSTANT_FUNDING_SOURCE"
        },
        "soft_descriptor": "ECHI5786786",
        "item_list": {
            "items": [
                {
                    "name": "hat",
                    "description": "Brown color hat",
                    "quantity": "5",
                    "price": "3",
                    "tax": "0.01",
                    "sku": "1",
                    "currency": "USD"
                },
                {
                    "name": "handbag",
                    "description": "Black color hand bag",
                    "quantity": "1",
                    "price": "15",
                    "tax": "0.02",
                    "sku": "product34",
                    "currency": "USD"
                }
            ],
            "shipping_address": {
                "recipient_name": "Hello World",
                "line1": "4thFloor",
                "line2": "unit#34",
                "city": "SAn Jose",
                "country_code": "US",
                "postal_code": "95131",
                "phone": "011862212345678",
                "state": "CA"
            }
        }
    }
],
    "note_to_payer": "Contact us for any questions on your order.",
    "redirect_urls": {
    "return_url": "http://www.amazon.com",
        "cancel_url": "http://www.hawaii.com"
}
}
}