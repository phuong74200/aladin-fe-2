import { LayoutProps } from "@/@types";

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin</h1>
      {children}
    </div>
  );
}
