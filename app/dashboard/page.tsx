import { requiredUser } from "../lib/hooks"

export default async function DashboardPage() {
    const session = await requiredUser()

    return <div>
        <h1>hello from the dashboard</h1>
    </div>
}