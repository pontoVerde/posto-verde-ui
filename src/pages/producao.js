import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

export default function Production (){
    const router = useRouter();
    return (
        <>
        <div className="panel-body cont">
        <Head>
            <title>Home</title>
        </Head>
        <Navbar/>
            <main>
                <section className="device-data">
                    <div className="device-data_title">
                        <button onClick={() => router.push('/producao')}>
                            <h2>
                                Fazenda 1
                            </h2>
                        </button>
                    </div>
                    <div className="device-data_cards">
                        <div className="device-data_card device_on">
                            <div className="device-data_card__painel">
                                <div id="gauge1"></div>
                            </div>
                        </div>
                        <div className="production-management">
                            <div className="production-management_title">
                                <span>Gerenciamento de produtos</span>
                                <div></div>
                            </div>
                            <div className="production-management_infos">
                                <div>
                                    <span>
                                        105
                                    </span>
                                    <h3>kW/h mês</h3>
                                </div>
                                <div>
                                    <span>
                                        125
                                    </span>
                                    <h3>Tokens</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="history_card">
                    <div>

                    </div>
                </section>
            </main>
            <footer>
                
            </footer>
            </div>
        </>
    )
}