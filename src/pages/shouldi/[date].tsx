import React from "react";
import { Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { SWRConfig } from "swr";
import axios from "axios";
import Link from "next/link";
import styles from '@/styles/Layout.module.css'

export default function SelectedDay({ fallback }: any) {
    const router = useRouter()
    const dateQuery = router.query.date
    const [validated, setValidated] = React.useState<boolean>(false)
    const [success, setSuccess] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (dateQuery) {
            axios.post('/api/shouldideploy?date=' + dateQuery).then((res) => {
                console.log(res)
                setSuccess(true)
                setValidated(res.data.validated)
            })
        }
    }, [dateQuery]);

    return (
        <main className={styles.main}>
            <SWRConfig value={{ fallback }}>
                <Link href={'/'}>
                    {' <- Retour a l\'acceuil'}
                </Link>
                {
                    success && (
                        <>
                            {validated ?
                                (
                                    <>
                                        <Text fontSize={90} fontWeight={"bold"}>
                                            Oui
                                        </Text>
                                        <Image src='/lepers-oui.gif' alt='Julien Lepers OUI' />
                                    </>
                                ) : (
                                    <>
                                        <Text fontSize={90} fontWeight={"bold"} >
                                            Non
                                        </Text>
                                        <Image src='/julien-lepers-c-est-non.gif' alt='Julien Lepers NON' />
                                    </>
                                )
                            }
                        </>
                    )
                }
            </SWRConfig>
        </main>
    );

}