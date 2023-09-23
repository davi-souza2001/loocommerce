'use client'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { Button, useToast, } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { EmailInput } from './components/EmailInput'
import { PasswordInput } from './components/PasswordInput'
import { ErrorMessage } from '@/components/ErrorMessage'

const createLoginFormSchema = z.object({
    email: z.string()
        .nonempty('O e-mail é obrigatório!')
        .email('Formato de e-mail inválido!')
        .toLowerCase(),
    password: z.string()
        .nonempty('A senha é obrigatório!')
        .min(6, 'A senha precisa ter no mínimo 6 caracteres!')
})

type CreateLoginFormData = z.infer<typeof createLoginFormSchema>

export default function Login() {
    const toast = useToast()

    const { register, handleSubmit, formState: { errors } } = useForm<CreateLoginFormData>({
        resolver: zodResolver(createLoginFormSchema)
    })

    async function handleLoginUser(data: CreateLoginFormData) {
        try {
            alert('aaaa')
        } catch (error: any) {
            toast({
                title: 'Erro ao cadastrar!',
                description: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
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
                position: 'top-right'
            })
        }

        if (errors.password) {
            toast({
                title: 'Erro ao cadastrar a senha!',
                description: errors.password.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            })
        }
    }, [errors])

    return (
        <div className="h-screen w-full flex items-center justify-center bg-black">
            <div className="h-full w-[700px] bg-white flex items-center justify-center p-6 rounded-lg shadow-md">
                <div className="w-full flex flex-col items-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-red-500 mt-[-50px]" />
                    <h1 className="text-2xl font-medium text-black">Entrar na plataforma</h1>
                    <form
                        onSubmit={handleSubmit(handleLoginUser)}
                        className='w-72'
                    >
                        <div className="mb-4">
                            <EmailInput value={register('email')} />
                        </div>

                        <ErrorMessage error={errors?.email?.message} />

                        <div className="mb-4">
                            <PasswordInput value={register('password')} />
                        </div>

                        <ErrorMessage error={errors?.password?.message} />

                        <div className='w-full flex items-center justify-center'>
                            <Button
                                type="submit"
                                className="w-1/2 text-white mt-10"
                                backgroundColor={'purple.500'}
                                textColor={'white'}
                                _hover={{
                                    backgroundColor: 'purple.600'
                                }}
                            >
                                Entrar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}