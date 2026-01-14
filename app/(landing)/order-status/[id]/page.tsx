import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";
import { getTransactionById } from "../../services/transaction.service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected";

const OrderStatus = async ({ params }: TPageProps) => {
  const { id } = await params;

  const transaction = await getTransactionById(id);
  console.log("transactions", transaction);

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-20 pb-20">
      <div className="max-w-5xl mx-auto py-10">
        <h1 className="text-5xl font-bold text-center mb-5">Order Status</h1>
      </div>
      {transaction.status === "pending" && <OrderSubmitted />}
      {transaction.status === "paid" && <OrderConfirmed />}
      {transaction.status === "rejected" && <OrderRejected />}
    </main>
  );
};

export default OrderStatus;
