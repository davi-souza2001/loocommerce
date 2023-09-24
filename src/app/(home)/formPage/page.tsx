'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductDetailsForm } from './components/ProductDetailsForm'
import { ProductSelectForm } from './components/ProductSelectForm'
import { ProductSpecificationForm } from './components/ProductSpecificationForm'
import { ProductItemsForm } from './components/ProductItemsForm'
import { useToast } from '@chakra-ui/react'
import { register } from 'module'

const createProductFormSchema = z.object({
  name: z
    .string()
    .nonempty('O nome é obrigatório!')
    .min(6, 'O nome precisa ter no mínimo 6 caracteres!'),
  id: z.string().nonempty('O nome é obrigatório!'),
  code: z.string().nonempty('O código é obrigatório!'),
  seller: z.string().nonempty('O vendedor é obrigatório!'),
  deadline: z.string().nonempty('O prazo é obrigatório!'),
  categories: z.string().nonempty('A categoria é obrigatória!'),
  tags: z.string().nonempty('A tag é obrigatória!'),
  subtitle: z.string().nonempty('O subtítulo é obrigatório!'),
  informations: z.string().nonempty('As informações são obrigatórias!'),
  cleanup: z.string().nonempty('A limpeza é obrigatória!'),
})

type CreateProductFormData = z.infer<typeof createProductFormSchema>

export default function FormPage() {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductFormSchema),
  })

  async function handleSubmitProduct(data: CreateProductFormData) {
    try {
      console.log(data)
    } catch (error: any) {
      toast({
        title: 'Erro ao enviar!',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    }
  }

  return (
    <main className="w-full flex z-0">
      <div className="w-28" />
      <div className="w-full mt-16">
        <h1 className="text-2xl font-semibold my-8 ml-10">Adicionar Produto</h1>
        <div className="w-full rounded-md shadow-md bg-red-100">
          <form className="mx-5" onSubmit={handleSubmit(handleSubmitProduct)}>
            <div className="h-full w-full bg-blue-200">
              <div className="h-full w-full grid min-[1708px]:grid-cols-3 min-[1195px]:grid-cols-2 grid-cols-1">
                <ProductDetailsForm
                  valueName={register('name')}
                  valueId={register('id')}
                  valueCode={register('code')}
                  valueSeller={register('seller')}
                  valueDeadline={register('deadline')}
                />
                <ProductSelectForm
                  title="Categorias"
                  placeholder="Selecionar categoria"
                  value={register('categories')}
                />
                <ProductSelectForm
                  title="Tags"
                  placeholder="Tags"
                  value={register('tags')}
                />
              </div>
              <ProductSpecificationForm
                valueSubtitle={register('subtitle')}
                valueInformations={register('informations')}
                valueCleanup={register('cleanup')}
              />
            </div>
            <div className="h-full w-full bg-green-200">
              <ProductItemsForm />
            </div>
            <div className="h-20 w-full gap-5 flex items-center justify-end">
              <button className="bg-gray-300 p-2 rounded-md transition-all hover:bg-gray-400">
                cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-100 p-2 rounded-md transition-all hover:bg-blue-200"
              >
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
