import styles from '../styles/Home.module.css'
import counterStyles from '../styles/Counter.module.css'
import { useEffect, useState}  from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter }  from 'next/router'

export default function Counter(){

    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username');
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
            <main className={counterStyles.main}>
                <section className={counterStyles.userResult}>
                    <section className={counterStyles.title}>
                        <div className={counterStyles.subtitle}>COUNTER PAGE</div>
                        <div className={counterStyles.welcome}>Welcome <span>{isUser}</span></div>
                    </section>
                    <section className={counterStyles.counter}>
                        <div>You will get <span>{number}</span> marks in this class.</div>
                        <div className={counterStyles.change}>
                            <button onClick={() => setNumber(number - 1)}>Keep It Chill</button>
                            <button onClick={() => setNumber(number + 1)}>Study Hard</button>
                        </div>
                    </section>
                </section>
                <img src="/pattern.svg" className={styles.pattern}></img>
            </main>

        </>
    )
}