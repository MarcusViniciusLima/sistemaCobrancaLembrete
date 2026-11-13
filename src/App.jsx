import { useLayoutEffect, useRef } from 'react'
import { Bell, CircleDollarSign, Clock3, CheckCircle2, LayoutDashboard, Users, Send, Plus, Search, MoreHorizontal, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import './App.css'

const charges = [
  ['M', 'Mariana Costa', 'Plano mensal · vence hoje', 'R$ 180,00', 'Hoje', 'orange'],
  ['J', 'João Pedro', 'Aula particular · venceu há 2 dias', 'R$ 90,00', 'Atrasada', 'red'],
  ['A', 'Ana Beatriz', 'Consultoria · vence em 3 dias', 'R$ 250,00', 'Em aberto', 'blue'],
  ['L', 'Lucas Martins', 'Plano mensal · pago hoje', 'R$ 180,00', 'Paga', 'green'],
]

function App() {
  const container = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => gsap.from('.reveal', { opacity: 0, y: 18, duration: .55, stagger: .1, ease: 'power2.out' }), container)
    return () => ctx.revert()
  }, [])

  return <main className="app" ref={container}>
    <aside className="side">
      <a className="logo" href="#inicio"><b>C</b><span>CLembra</span></a>
      <nav><a className="active" href="#inicio"><LayoutDashboard />Visão geral</a><a href="#cobrancas"><CircleDollarSign />Cobranças</a><a href="#clientes"><Users />Clientes</a><a href="#lembretes"><Bell />Lembretes</a></nav>
      <div className="side-foot"><div className="tip"><Send size={17}/><strong>Primeiros passos</strong><p>Cadastre seu primeiro cliente e comece a cobrar.</p><a href="#clientes">Ver guia →</a></div><div className="user"><b>V</b><span><strong>Vinícius</strong><small>Autônomo</small></span><MoreHorizontal size={18}/></div></div>
    </aside>
    <section className="workspace" id="inicio">
      <header className="top reveal"><button className="mobile-logo"><b>C</b> Cobra</button><label><Search size={18}/><input placeholder="Buscar cliente ou cobrança"/></label><button className="notify"><Bell size={19}/><i/></button></header>
      <div className="content">
        <section className="welcome reveal"><div><p className="eyebrow">QUINTA-FEIRA, 12 DE NOVEMBRO</p><h1>Bom dia, Vinícius 👋</h1><p>Veja o resumo das suas cobranças.</p></div><button className="primary"><Plus size={18}/> <span>Nova cobrança</span></button></section>
        <section className="stats reveal">
          <article><i className="icon green"><CircleDollarSign/></i><p>A receber este mês</p><strong>R$ 2.480,00</strong><small className="up">↗ 12% <em>vs. mês anterior</em></small></article>
          <article><i className="icon orange"><Clock3/></i><p>Em atraso</p><strong>R$ 390,00</strong><small className="warn">3 cobranças pendentes</small></article>
          <article><i className="icon blue"><CheckCircle2/></i><p>Recebido este mês</p><strong>R$ 1.840,00</strong><small className="up">↗ 8% <em>vs. mês anterior</em></small></article>
        </section>
        <section className="grid">
          <article className="panel reveal" id="cobrancas"><header><div><h2>Próximas cobranças</h2><p>Acompanhe quem precisa de atenção.</p></div><button>Ver todas <ArrowUpRight size={15}/></button></header>
            {charges.map(([initial, name, detail, value, status, color]) => <div className="charge" key={name}><b className={'avatar '+color}>{initial}</b><div><strong>{name}</strong><small>{detail}</small></div><div className="value"><strong>{value}</strong><small className={color}>{status}</small></div><button aria-label={'Opções de '+name}><MoreHorizontal size={19}/></button></div>)}
          </article>
          <aside className="right">
            <article className="reminder reveal" id="lembretes"><i><Bell size={19}/></i><p className="eyebrow">LEMBRETE DE HOJE</p><h2>2 clientes precisam de um toque.</h2><p>Envie uma mensagem rápida e mantenha seus pagamentos em dia.</p><button><Send size={16}/>Enviar lembretes</button></article>
            <article className="panel calendar reveal"><header><div><h2>Agenda de recebimentos</h2><p>Novembro de 2026</p></div></header><div className="days"><span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span><span>DOM</span>{[9,10,11,12,13,14,15].map(n=><b className={n===12?'today':''} key={n}>{n}</b>)}</div></article>
          </aside>
        </section>
      </div>
    </section>
  </main>
}
export default App
