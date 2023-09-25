'use client'
import { z } from 'zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductDetailsForm } from './components/ProductDetailsForm'
import { ProductSelectForm } from './components/ProductSelectForm'
import { ProductSpecificationForm } from './components/ProductSpecificationForm'
import { Icon, useToast } from '@chakra-ui/react'
import { BiPlus } from 'react-icons/bi'
import { ProductItemsForm } from './components/ProductItemsForm'
import { useState } from 'react'
import { client } from '@/data/client'
import { AiOutlineLoading } from 'react-icons/ai'

const createProductFormSchema = z.object({
  productId: z.string().nonempty('O nome é obrigatório!'),
  id: z.string().nonempty('O id é obrigatório!'),
  code: z.string().nonempty('O código é obrigatório!'),
  seller: z.string().nonempty('O vendedor é obrigatório!'),
  deliveryDate: z
    .string()
    .nonempty('A data é obrigatória!')
    .transform((val) => new Date(val).getTime()),
  categories: z
    .string()
    .nonempty('A categoria é obrigatória!')
    .transform((val) => [val]),
  tags: z
    .string()
    .nonempty('A tag é obrigatória!')
    .transform((val) => [val]),
  specificationsSubtitle: z.string().nonempty('O subtítulo é obrigatório!'),
  specificationsInfo: z.string().nonempty('As informações são obrigatórias!'),
  specificationsCares: z.string().nonempty('A limpeza é obrigatória!'),
  items: z.array(
    z.object({
      code: z.string().nonempty('O código é obrigatório!'),
      color: z.string().nonempty('A cor é obrigatória!'),
      width: z.string().nonempty('A largura é obrigatória!'),
      height: z.string().nonempty('A altura é obrigatória!'),
      length: z.string().nonempty('O tamanho é obrigatório!'),
    }),
  ),
})

type CreateProductFormData = z.infer<typeof createProductFormSchema>

export default function FormPage() {
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductFormSchema),
  })

  const { fields, append } = useFieldArray({
    name: 'items',
    control,
  })

  async function handleSubmitProduct(data: CreateProductFormData) {
    setLoading(true)
    try {
      const formattedItems = data.items.map((item) => {
        return {
          code: item.code,
          color: item.color,
          size: {
            width: parseInt(item.width),
            height: parseInt(item.height),
            length: parseInt(item.length),
          },
        }
      })

      const formattedData = { ...data, items: formattedItems }

      await client.post('/create-product', formattedData)

      toast({
        title: 'Enviado com sucesso!',
        description: 'produto enviado.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    } catch (error: any) {
      toast({
        title: 'Erro ao enviar!',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="w-full flex z-0">
      <div className="w-28" />
      <div className="w-full mt-16">
        <h1 className="text-2xl font-semibold my-8 ml-10">Adicionar Produto</h1>
        <div className="w-full ">
          <form
            className="mx-5 p-2"
            onSubmit={handleSubmit(handleSubmitProduct)}
          >
            <div className="h-full w-full rounded-md shadow-md">
              <div className="h-full w-full grid min-[1708px]:grid-cols-3 min-[1195px]:grid-cols-2 grid-cols-1">
                <ProductDetailsForm
                  valueName={register('productId')}
                  valueId={register('id')}
                  valueCode={register('code')}
                  valueSeller={register('seller')}
                  valueDeadline={register('deliveryDate')}
                  errorsName={errors.productId?.message}
                  errorsId={errors.id?.message}
                  errorsCode={errors.code?.message}
                  errorsSeller={errors.seller?.message}
                  errorsDeadline={errors.deliveryDate?.message}
                />
                <ProductSelectForm
                  title="Categorias"
                  placeholder="Selecionar categoria"
                  value={register('categories')}
                  errors={errors.categories?.message}
                />
                <ProductSelectForm
                  title="Tags"
                  placeholder="Tags"
                  value={register('tags')}
                  errors={errors.tags?.message}
                />
              </div>
              <ProductSpecificationForm
                valueSubtitle={register('specificationsSubtitle')}
                valueInformations={register('specificationsInfo')}
                valueCleanup={register('specificationsCares')}
                errorsSubtitle={errors.specificationsSubtitle?.message}
                errorsInformations={errors.specificationsInfo?.message}
                errorsCleanup={errors.specificationsCares?.message}
              />
            </div>
            <div className="h-full w-full">
              <div className="p-5 mt-5 rounded-md shadow-md flex flex-col items-start justify-center">
                <div className="w-full flex items-center justify-between">
                  <p className="font-medium text-xl mb-8">Itens</p>
                  <button
                    type="button"
                    className="font-normal mb-8 flex items-center justify-center"
                    onClick={() =>
                      append({
                        code: '',
                        color: '',
                        width: '',
                        height: '',
                        length: '',
                      })
                    }
                  >
                    <Icon as={BiPlus} height={5} width={5} />
                    <p>Adicionar</p>
                  </button>
                </div>
                {fields.map((_, index) => {
                  return (
                    <div key={index} className="h-full w-full mb-7">
                      <ProductItemsForm
                        errors={errors}
                        itemPosition={index}
                        valueCode={register(`items.${index}.code`)}
                        valueColor={register(`items.${index}.color`)}
                        width={register(`items.${index}.width`)}
                        height={register(`items.${index}.height`)}
                        length={register(`items.${index}.length`)}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="h-20 w-full gap-5 flex items-center justify-end">
              {loading && (
                <Icon
                  as={AiOutlineLoading}
                  height={5}
                  width={5}
                  className="ml-3 transition-all animate-spin"
                />
              )}
              <button className="bg-gray-300 p-2 rounded-md transition-all hover:bg-gray-400">
                cancelar
              </button>
              <button
                type="submit"
                className="bg-[#C0D7E5] p-2 rounded-md transition-all hover:bg-[#afc9d8]"
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
