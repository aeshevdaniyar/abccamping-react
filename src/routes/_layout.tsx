import { Layout } from "@/components/templates/Layout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
    component: () => <LayoutComponent />,
});

function LayoutComponent() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}
