import { ProductDetailsForm } from './components/ProductDetailsForm'
import { ProductSelectForm } from './components/ProductSelectForm'
import { ProductSpecificationForm } from './components/ProductSpecificationForm'
import { ProductItemsForm } from './components/ProductItemsForm'

export default function FormPage() {
  return (
    <main className="w-full flex z-0">
      <div className="w-28" />
      <div className="w-full mt-16">
        <h1 className="text-2xl font-semibold my-8 ml-10">Adicionar Produto</h1>
        <div className="w-full rounded-md shadow-md bg-red-100">
          <form className="mx-5">
            <div className="h-full w-full bg-blue-200">
              <div className="h-full w-full grid min-[1708px]:grid-cols-3 min-[1195px]:grid-cols-2 grid-cols-1">
                <ProductDetailsForm />
                <ProductSelectForm
                  title="Categorias"
                  placeholder="Selecionar categoria"
                />
                <ProductSelectForm title="Tags" placeholder="Tags" />
              </div>
              <ProductSpecificationForm />
            </div>
            <div className="h-full w-full bg-green-200">
              <ProductItemsForm />
            </div>
            <div className="h-20 w-full gap-5 flex items-center justify-end">
              <button className="bg-gray-300 p-2 rounded-md transition-all hover:bg-gray-400">
                cancelar
              </button>
              <button className="bg-blue-100 p-2 rounded-md transition-all hover:bg-blue-200">
                enviar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-16" />
    </main>
  )
}
