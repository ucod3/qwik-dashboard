import { component$, Slot } from "@builder.io/qwik";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "~/lib/data";

export const useFetchRevenue = routeLoader$(async () => {
  return await fetchRevenue();
});

export const useFetchLatestInvoices = routeLoader$(async () => {
  return await fetchLatestInvoices();
});

export const useFetchCardData = routeLoader$(async () => {
  return await fetchCardData();
});

// export const useFetchData = routeLoader$(async () => {
//   return {
//     revenue: await fetchRevenue(),
//     latestInvoices: await fetchLatestInvoices(),
//     cardData: await fetchCardData(),
//   };
// });

export default component$(() => {
  return (
    <div class="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div class="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div class="flex-grow md:overflow-y-auto md:p-12">
        <Slot />
      </div>
    </div>
  );
});
