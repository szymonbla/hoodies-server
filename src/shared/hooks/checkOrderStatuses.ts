const OrderStatues = {
  NOT_APPROVED: '61eecb0226bcd443ffd25778',
  CONFIRMED: '61db41a4d31bd221b9b21ffb',
  CANCELED: '61db420ed31bd221b9b22000',
  COMPLETED: '61eecb5f26bcd443ffd2577a'
}

const orderStatusSequnce = [
  OrderStatues.NOT_APPROVED,
  OrderStatues.CONFIRMED,
  OrderStatues.COMPLETED,
  OrderStatues.CANCELED
]

export const checkOrderStatuesOrder = (idOrderStatusOfActualOrder, idOrderStatusOfNewOrder) => {
  let flag = true
  const actualIndexOrderStatus = orderStatusSequnce.indexOf(idOrderStatusOfActualOrder)
  const newIndexOrderStatus = orderStatusSequnce.indexOf(idOrderStatusOfNewOrder)
  if (actualIndexOrderStatus > newIndexOrderStatus) {
    flag = false
  }
  return flag
}
