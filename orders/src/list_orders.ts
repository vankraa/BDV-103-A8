import { type BookID, type OrderId } from '../../documented_types'
import { InMemoryWarehouse, type WarehouseData } from './data'

export async function listOrders (data: WarehouseData): Promise<Array<{ orderId: OrderId, books: Record<BookID, number> }>> {
  return await data.listOrders()
}

if (import.meta.vitest !== undefined) {
  const { test, expect } = import.meta.vitest

  test('if orders exist they can be listed', async () => {
    const data = new InMemoryWarehouse({ orders: { 'my-order': { book: 2 } } })

    const orders = await listOrders(data)

    expect(orders).toHaveLength(1)

    const order = orders[0]
    expect(order.orderId).toEqual('my-order')
    expect(order.books.book).toEqual(2)
  })
}
