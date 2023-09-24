'use client'
import { z } from 'zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductDetailsForm } from './components/ProductDetailsForm'
import { ProductSelectForm } from './components/ProductSelectForm'
import { ProductSpecificationForm } from './components/ProductSpecificationForm'
import { Icon, Input, useToast, Text } from '@chakra-ui/react'
import { Separator } from '@radix-ui/react-separator'
import { BiPlus } from 'react-icons/bi'
import { ErrorMessage } from '@/components/ErrorMessage'

const createProductFormSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório!'),
  id: z.string().nonempty('O id é obrigatório!'),
  code: z.string().nonempty('O código é obrigatório!'),
  seller: z.string().nonempty('O vendedor é obrigatório!'),
  deadline: z.string().nonempty('O prazo é obrigatório!'),
  categories: z.string().nonempty('A categoria é obrigatória!'),
  tags: z.string().nonempty('A tag é obrigatória!'),
  subtitle: z.string().nonempty('O subtítulo é obrigatório!'),
  informations: z.string().nonempty('As informações são obrigatórias!'),
  cleanup: z.string().nonempty('A limpeza é obrigatória!'),
  items: z.array(
    z.object({
      code: z.string().nonempty('O código é obrigatório!'),
      color: z.string().nonempty('A cor é obrigatória!'),
      mxOne: z.string().nonempty('O mxOne é obrigatório!'),
      mxTwo: z.string().nonempty('O mxTwo é obrigatório!'),
      m: z.string().nonempty('O m é obrigatório!'),
    }),
  ),
})

type CreateProductFormData = z.infer<typeof createProductFormSchema>

export default function FormPage() {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductFormSchema),
  })

  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control,
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
                  errorsName={errors.name?.message}
                  errorsId={errors.id?.message}
                  errorsCode={errors.code?.message}
                  errorsSeller={errors.seller?.message}
                  errorsDeadline={errors.deadline?.message}
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
                valueSubtitle={register('subtitle')}
                valueInformations={register('informations')}
                valueCleanup={register('cleanup')}
              />
            </div>
            <div className="h-full w-full bg-green-200">
              {/* start items */}
              <div className="p-5 flex flex-col items-start justify-center">
                <div className="w-full flex items-center justify-between">
                  <p className="font-medium text-xl mb-8">Itens</p>
                  <button
                    type="button"
                    className="font-normal mb-8 flex items-center justify-center"
                    onClick={() =>
                      append({
                        code: '',
                        color: '',
                        mxOne: '',
                        mxTwo: '',
                        m: '',
                      })
                    }
                  >
                    <Icon as={BiPlus} height={5} width={5} />
                    <p>Adicionar</p>
                  </button>
                </div>
                {fields.map((item, index) => {
                  return (
                    <div key={index} className="h-full w-full mb-7">
                      <div className="w-full flex items-center justify-between">
                        <p className="mr-12">
                          Item&nbsp;
                          {`${index + 1 >= 10 ? index + 1 : `0${index + 1}`}`}
                        </p>
                        <Separator className="h-[1px] w-full bg-slate-600" />
                      </div>
                      <div className="h-full w-full mt-2 flex flex-col">
                        <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
                          <Text className="font-medium mr-9">Código: </Text>
                          <Input
                            size="sm"
                            padding={'5'}
                            borderRadius={'5'}
                            backgroundColor={'gray.200'}
                            {...register(`items.${index}.code`)}
                          />
                          {errors?.items ? (
                            <ErrorMessage
                              error={errors.items[index]?.code?.message}
                            />
                          ) : (
                            false
                          )}
                        </div>
                        <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
                          <Text className="font-medium mr-16">Cor: </Text>
                          <Input
                            size="sm"
                            padding={'5'}
                            borderRadius={'5'}
                            backgroundColor={'gray.200'}
                            {...register(`items.${index}.color`)}
                          />
                          {errors?.items ? (
                            <ErrorMessage
                              error={errors.items[index]?.color?.message}
                            />
                          ) : (
                            false
                          )}
                        </div>
                        <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
                          <Text className="font-medium mr-10">Tamanho: </Text>
                          <Input
                            size="sm"
                            width={'16'}
                            padding={'5'}
                            borderRadius={'5'}
                            backgroundColor={'gray.200'}
                            {...register(`items.${index}.mxOne`)}
                          />
                          <p>m x</p>
                          {errors?.items ? (
                            <ErrorMessage
                              error={errors.items[index]?.mxOne?.message}
                            />
                          ) : (
                            false
                          )}
                          <Input
                            size="sm"
                            width={'16'}
                            padding={'5'}
                            borderRadius={'5'}
                            backgroundColor={'gray.200'}
                            {...register(`items.${index}.mxTwo`)}
                          />
                          <p>m x</p>
                          {errors?.items ? (
                            <ErrorMessage
                              error={errors.items[index]?.mxTwo?.message}
                            />
                          ) : (
                            false
                          )}
                          <Input
                            size="sm"
                            width={'16'}
                            padding={'5'}
                            borderRadius={'5'}
                            backgroundColor={'gray.200'}
                            {...register(`items.${index}.m`)}
                          />
                          <p>m</p>
                          {errors?.items ? (
                            <ErrorMessage
                              error={errors.items[index]?.m?.message}
                            />
                          ) : (
                            false
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* ends items */}
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
