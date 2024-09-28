import { useLocation } from "react-router-dom";

export function useBreadcrumb() {
  const location = useLocation();

  const pathname = location.pathname.split("/").filter((x) => x);

  const breadcrumbsItems = pathname.map((value, index) => {
    const path = `/${pathname.slice(0, index + 1).join("/")}`; // Build path for each item

    return {
      name: value.charAt(0).toUpperCase() + value.slice(1),
      path,
    };
  });

  return breadcrumbsItems;
}
