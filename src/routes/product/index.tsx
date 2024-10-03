import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns, Product } from "./columns";

export const product: Product[] = [
  {
    id: "728ed52f",
    code: "HVB1",
    title: "title 1",
    stock: 10,
    status: "pending",
    price: 100.0,
  },
  {
    id: "728ed52f",
    code: "HVB1",
    title: "Title 1",
    stock: 10,
    status: "pending",
    price: 100,
  },
  {
    id: "728ed52f",
    code: "HVB1",
    title: "Title 1",
    stock: 10,
    status: "pending",
    price: 100,
  },
];

export function Products() {
  return (
    <main className="grid items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Manage your products</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={product} />
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
