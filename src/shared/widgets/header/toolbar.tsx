"use client";

import { useUser } from '@clerk/nextjs';
import { Button } from '@nextui-org/react'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Toolbar = () => {
    const { user } = useUser();

    return (
        <>
            <Button color='primary' className='text-lg'>
                Start Trial
            </Button>
            {
                user ? (
                    <>
                        <Link href={'/dashboard'}>
                            <Image src={user?.imageUrl} width={40} height={40} alt="" className='rounded-full'></Image>
                        </Link>

                    </>
                ) : (
                    <>
                        <Link href={'/sign-in'}>
                            Login
                        </Link>
                    </>
                )
            }
        </>
    )
}

export default Toolbar