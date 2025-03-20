import Navbar from "@/components/nav-bar";

export default function CategoriesPage() {
    return (
        <>
            <Navbar active="categorias" />

            <main className="flex items-center justify-center">
                <div className="bg-slate-900 rouded min-w-2/3 p-6 m-6">
                    <h2 className="text-lg font-bold">Categorias</h2>
                </div>
            </main>
        </>
    )
}