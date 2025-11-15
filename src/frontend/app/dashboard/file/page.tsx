import ClientDashboardFile from "@/app/components/DashBoardFile";
import Spinner from "@/app/components/Spinner";
import { Suspense } from "react";


export default function Page() {
    return <>
    <Suspense fallback={<Spinner/>}>
        <ClientDashboardFile/>
    </Suspense>
    </>
}