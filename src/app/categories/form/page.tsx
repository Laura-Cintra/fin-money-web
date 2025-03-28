"use client"

import { createCategory } from "@/actions/category-actions";
import Navbar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    values: {
        name: "",
        icon: ""
    },
    errors: {
        name: "",
        icon: ""
    }
}

export default function Categoriespage(){
    const[state, formAction, pendind] = useActionState(createCategory, initialState) // state - mudança do estado que vai sinalizar o erro

    return(
    <>
    <Navbar active="categorias"/>

    <main className="flex items-center justify-center">
        <div className=" bg-slate-900 rounded p-5 m-6 max-w-[500px]">
            <h2 className="font-bold">Cadastrar Categoria</h2>

            <form action={formAction} className="space-y-4 mt-6">
                <div>
                     <Input name="name" placeholder="Nome da categoria" aria-invalid={!!state?.errors.name}/> {/* !! --> gambiarra // se houver um erro no estado nome use o aria-invalid */}
                    <span className="text-sm text-destructive">{state?.errors.name}</span>?
                </div>
                
                <div>
                    <Input name="icon" placeholder="Ícone" aria-invalid={!!state?.errors.icon}/>
                    <span className="text-sm text-destructive">{state?.errors.icon}</span>?
                </div>

                <div className="flex justify-around">
                    <Button variant={"outline"} asChild>
                        <Link href={"/categories"}>Cancelar</Link>
                    </Button>
                    <Button>Salvar</Button>
                </div>
            </form>
        </div>
    </main>
    </>
    )
}