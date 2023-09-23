'use client'
import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Button, Input, useToast, Collapse, Text, Icon } from '@chakra-ui/react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"


interface PasswordInputProps {
    value: UseFormRegisterReturn<"password">
}

export function PasswordInput(props: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <Text mb='8px' className='text-black font-medium'>Senha</Text>
            <div className='flex items-center justify-center'>
                <Input
                    placeholder="$%-#4&21-*!@"
                    size='sm'
                    backgroundColor={'gray.200'}
                    borderRightRadius={0}
                    height={'12'}
                    type={showPassword ? 'text' : 'password'}
                    {...props.value}
                />
                <Button
                    height={'12'}
                    size='sm'
                    backgroundColor={'gray.200'}
                    borderLeftRadius={0}
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <Icon as={AiOutlineEye} height={5} width={5} />
                    ) : (
                        <Icon as={AiOutlineEyeInvisible} height={5} width={5} />
                    )}
                </Button>
            </div>
        </>
    )
}