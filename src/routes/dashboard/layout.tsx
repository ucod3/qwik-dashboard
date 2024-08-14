import { component$, Slot } from "@builder.io/qwik";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchRevenue } from "~/lib/data";

export const useFetchData = routeLoader$(async () => {
  const revenue = await fetchRevenue();
  return { revenue };
});

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
