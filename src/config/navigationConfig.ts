import { Home, Package, ShoppingCart, Users } from "lucide-react";

export const navLinks = [
  { path: "/", icon: Home, label: "Dashboard" },
  {
    path: "/orders",
    icon: ShoppingCart,
    label: "Orders",
    badge: 6,
  },
  {
    path: "/products",
    icon: Package,
    label: "Products",
    active: true,
  },
  { path: "/customers", icon: Users, label: "Customers" },
];
