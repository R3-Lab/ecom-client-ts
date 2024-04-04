import { fetcher, getSession } from './index';
import { Order, OrderDetail } from './types';

export const getOrder = async (order_id: string) => {
  const { data, error } = await fetcher<Order>(`/orders/${order_id}`);
  if (error) {
    console.error('Failed to get order', error);
    throw new Error(error.message);
  }

  return data!;
};

export const getOrders = async (limit?: number, offset?: number) => {
  const { site_id } = await getSession();
  const queryParams = new URLSearchParams();

  if (site_id) {
    queryParams.append('ecommerce_site_id', site_id);
  }

  if (limit) {
    queryParams.append('limit', limit.toString());
  }
  if (offset) {
    queryParams.append('offset', offset.toString());
  }

  const { data, error } = await fetcher<Order[]>(`/orders?${queryParams}`);
  if (error) {
    console.error('Failed to get orders', error);
    throw new Error(error.message);
  }

  return data!;
};

export const getOrderDetails = async (order_id: string) => {
  const { data, error } = await fetcher<OrderDetail[]>(`/orders/${order_id}/details`);
  if (error) {
    console.error('Failed to get order details', error);
    throw new Error(error.message);
  }

  return data!;
};
