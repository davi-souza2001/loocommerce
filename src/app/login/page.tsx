'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Icon, useToast } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { EmailInput } from './components/EmailInput'
import { PasswordInput } from './components/PasswordInput'
import { ErrorMessage } from '@/components/ErrorMessage'
import UseAuth from '@/service/hooks/UseSideBar'
import { AiOutlineLoading } from 'react-icons/ai'
import Image from 'next/image'

const createLoginFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido!')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('A senha é obrigatória!')
    .min(4, 'A senha precisa ter no mínimo 4 caracteres!'),
})

type CreateLoginFormData = z.infer<typeof createLoginFormSchema>

export default function Login() {
  const toast = useToast()
  const { push } = useRouter()
  const { handleLogin, loading } = UseAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLoginFormData>({
    resolver: zodResolver(createLoginFormSchema),
  })

  async function handleLoginUser(data: CreateLoginFormData) {
    try {
      await handleLogin(data)
      push('/')
    } catch (error: any) {
      toast({
        title: 'Erro ao cadastrar!',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    }
  }

  useEffect(() => {
    if (errors.email) {
      toast({
        title: 'Erro ao cadastrar o email!',
        description: errors.email.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    }

    if (errors.password) {
      toast({
        title: 'Erro ao cadastrar a senha!',
        description: errors.password.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    }
  }, [errors])

  return (
    <div className="h-screen w-full flex items-center justify-center bg-background">
      <div className="h-full w-[700px] bg-white flex items-center justify-center p-6 rounded-lg shadow-md">
        <div className="w-full flex flex-col items-center space-y-14">
          <Image
            alt="logo"
            src={'logo.svg'}
            className=" mt-[-50px]"
            height={150}
            width={150}
          />
          <h1 className="text-2xl font-semibold font-nunito text-black">
            Entrar na plataforma
          </h1>
          <form onSubmit={handleSubmit(handleLoginUser)} className="w-72">
            <div className="mb-4">
              <EmailInput value={register('email')} />
            </div>

            <ErrorMessage error={errors?.email?.message} />

            <div className="mb-4">
              <PasswordInput value={register('password')} />
            </div>

            <ErrorMessage error={errors?.password?.message} />

            <div className="w-full flex items-center justify-center transition-all">
              <button
                type="submit"
                className="w-1/2 text-white font-normal font-ubuntu mt-10 p-2 rounded-md bg-loomiPurple hover:purple-600"
              >
                Entrar
                {loading && (
                  <Icon
                    as={AiOutlineLoading}
                    height={5}
                    width={5}
                    className="ml-3 transition-all animate-spin"
                  />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
