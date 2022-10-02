import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";


const Votacao: NextPage = (props) => {

    const [hour, setHour] = useState('')
    const [candidates, setCandidates] = useState<any[]>([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if (loaded) return;
        const fetchData = async () => {
            const response = await fetch('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json');
            const parsedResponse = await response.json();

            console.log(parsedResponse)

            setHour(parsedResponse.ht);
            setCandidates(parsedResponse.cand);
            setLoaded(true)
        }

        fetchData()
    }, [])

    useEffect(() => {
        console.log({ candidates })
    }, [candidates])

    const thClass = `
        w-1/6
        min-w-[160px]
        text-lg
        font-semibold
        text-white
        py-4
        lg:py-7
        px-3
        lg:px-4
        border-l border-transparent
    `

    const tdClass = `
        text-center text-dark
        font-medium
        text-base
        py-5
        px-2
        bg-[#F3F6FF]
        border-b border-l border-[#E8E8E8]
    `

    return (
        <div>
            <Head>
                <title>Eduardo Wronscki | Votacao</title>
                <meta name="description" content="Eduardo Wronscki - Full-Stack Developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>

                <span className="text-secondary">Ultima atualização: {hour}</span>
                <table className="table-fixed text-primary w-full">
                    <thead>
                        <tr className="bg-primary text-center">
                            <th className={thClass}>#</th>
                            <th className={thClass}>Nome</th>
                            <th className={thClass}>% votos</th>
                            <th className={thClass}>Total votos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loaded && candidates.map((candidate, idx) => {
                            return (
                                <tr key={candidate.seq}>
                                    <td className={tdClass}>{idx + 1}</td>
                                    <td className={tdClass}>{candidate.nm}</td>
                                    <td className={tdClass}>{candidate.pvap}</td>
                                    <td className={tdClass}>{candidate.vap}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {



    return {
        props: {

        }
    }
}

export default Votacao;
