import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query?: string;
  };
}) {
  const { query } = searchParams;

  return (
    <Suspense fallback={<InvoicesTableSkeleton />}>
      <CustomersTable query={query} />
    </Suspense>
  );
}
