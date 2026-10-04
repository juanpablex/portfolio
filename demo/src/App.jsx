import { useState, useRef, useEffect } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts'
import data from './data.json'

const money = (n) => '$' + n.toLocaleString('en-US')

function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data.salesByMonth}>
        <CartesianGrid stroke="#1d3d52" />
        <XAxis dataKey="month" stroke="#8fa3b0" /><YAxis stroke="#8fa3b0" />
        <Tooltip contentStyle={{ background: '#112b3c', border: 0 }} /><Legend />
        <Line dataKey="sales" name="Sales (k$)" stroke="#00abf0" strokeWidth={2} />
        <Line dataKey="target" name="Target (k$)" stroke="#f1c40f" strokeDasharray="4 4" />
      </LineChart>
    </ResponsiveContainer>
  )
}

function ProductsChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data.topProducts}>
        <CartesianGrid stroke="#1d3d52" />
        <XAxis dataKey="product" stroke="#8fa3b0" /><YAxis stroke="#8fa3b0" />
        <Tooltip contentStyle={{ background: '#112b3c', border: 0 }} />
        <Bar dataKey="revenue" name="Revenue ($)" fill="#00abf0" />
      </BarChart>
    </ResponsiveContainer>
  )
}

function RoutesMap() {
  return (
    <svg viewBox="0 0 100 100" className="map" role="img" aria-label="Seller routes and heat map">
      {data.heat.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} fill="#e74c3c" opacity=".25" />)}
      {data.salespeople.map((s) => (
        <g key={s.name}>
          <polyline points={s.visits.map((v) => v.join(',')).join(' ')} fill="none" stroke={s.color} strokeWidth=".8" />
          {s.visits.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.6" fill={s.color} />)}
        </g>
      ))}
    </svg>
  )
}

function Table({ cols, rows }) {
  return (
    <table><thead><tr>{cols.map((c) => <th key={c[0]}>{c[1]}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{cols.map((c) => <td key={c[0]}>{r[c[0]]}</td>)}</tr>)}</tbody></table>
  )
}

// Canned answers matched by keywords. Replace `reply` with an LLM call later.
const answers = [
  { keys: ['sales', 'revenue', 'month'], text: 'Sales are above target in 5 of the last 6 months. Here is the trend:', view: <SalesChart /> },
  { keys: ['product', 'best', 'top'], text: 'These are the top products by revenue:', view: <ProductsChart /> },
  { keys: ['stock', 'inventory'], text: 'Two products are below their minimum stock:', view: <Table cols={[['product', 'Product'], ['stock', 'Stock'], ['min', 'Min'], ['status', 'Status']]} rows={data.stock} /> },
  { keys: ['receivable', 'owe', 'debt', 'collect', 'due'], text: 'Outstanding receivables, oldest first:', view: <Table cols={[['customer', 'Customer'], ['due', 'Due'], ['days', 'Days']]} rows={[...data.receivables].sort((a, b) => b.days - a.days).map((r) => ({ ...r, due: money(r.due) }))} /> },
  { keys: ['seller', 'route', 'map', 'visit', 'heat'], text: 'Seller routes with customer density in red:', view: <RoutesMap /> }
]
const fallback = { text: 'This is a demo with preset answers. Try: sales, top products, stock, receivables or seller routes.' }

function reply(q) {
  const t = q.toLowerCase()
  return answers.find((a) => a.keys.some((k) => t.includes(k))) || fallback
}

const suggestions = ['How are sales by month?', 'Top products', 'Stock status', 'Who owes us money?', 'Show seller routes']

export default function App() {
  const [msgs, setMsgs] = useState([{ from: 'bot', text: `Hi! I'm the ${data.company} assistant. Ask me about sales, stock, receivables or routes.` }])
  const [input, setInput] = useState('')
  const end = useRef(null)
  useEffect(() => end.current?.scrollIntoView({ behavior: 'smooth' }), [msgs])

  const send = (q) => {
    if (!q.trim()) return
    setMsgs((m) => [...m, { from: 'me', text: q }, { from: 'bot', ...reply(q) }])
    setInput('')
  }

  return (
    <div className="app">
      <header><a href="../asistente-ia.html">← Case study</a><h1>ERP Assistant — Demo</h1><span>Fictitious data · preset answers</span></header>
      <div className="grid">
        <section className="panel chat">
          <div className="msgs">
            {msgs.map((m, i) => (
              <div key={i} className={'msg ' + m.from}><p>{m.text}</p>{m.view && <div className="view">{m.view}</div>}</div>
            ))}
            <div ref={end} />
          </div>
          <div className="chips">{suggestions.map((s) => <button key={s} onClick={() => send(s)}>{s}</button>)}</div>
          <form onSubmit={(e) => { e.preventDefault(); send(input) }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something…" />
            <button>Send</button>
          </form>
        </section>
        <aside>
          <section className="panel"><h2>Sales vs target</h2><SalesChart /></section>
          <section className="panel"><h2>Top products</h2><ProductsChart /></section>
          <section className="panel"><h2>Seller routes</h2><RoutesMap /></section>
        </aside>
      </div>
    </div>
  )
}
