import { component$ } from "@builder.io/qwik";
import {
  useFetchData,
  useFetchRevenue,
  useFetchCardData,
  useFetchLatestInvoices,
} from "./layout";

import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";

export default component$(() => {
  // const { revenue, latestInvoices } = useFetchData().value;
  // const {
  //   numberOfCustomers,
  //   numberOfInvoices,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = useFetchData().value.cardData;
  // const {
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  //   numberOfInvoices,
  //   numberOfCustomers,
  // } = cardData;
  const revenue = useFetchRevenue().value;
  const latestInvoices = useFetchLatestInvoices().value;
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = useFetchCardData().value;
  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
});
