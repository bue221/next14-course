import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import React, { Suspense } from 'react';
import CustomersTable from '@/app/ui/customers/table';

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  return (
    <div className="w-full">
      <Suspense key={0} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable />
      </Suspense>
    </div>
  );
}
