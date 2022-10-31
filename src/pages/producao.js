import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Chart from "../components/grafico";
import { Stat } from "../components/gauge";
import { useContext, useEffect, useState } from "react";
import { SocketProvider } from "../context/socket";

export const data = [
    [
      { type: "date", label: "Day" },
      "Average temperature"
      // "Average hours of daylight",
    ],
    [new Date(2022, 10, 29), 3],
    [new Date(2022, 10, 29), 4],
    [new Date(2022, 10, 30), 5],
];

export default function Production (){
    const router = useRouter();
    const socket = useContext(SocketProvider);
    const [speed1, setSpeed1] = useState(0);

    useEffect(() => {
        if(socket?.connected) {
            socket.on('gauge_speed1', (data) => {
                    setSpeed1(data);
            });
        }
    },[socket]);

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
                                <div id="gauge1">
                                    <Stat value={speed1} />
                                </div>
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
                <Chart data={data}/>
                {/* <section className="history_card">
                    <div>
                    </div>
                </section> */}
            </main>
            <footer>
                
            </footer>
            </div>
        </>
    )
}
