// src/components/Chat.jsx
import { useState, useEffect, useRef } from "react";

export default function Chat() {
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem("chat.history");
    return saved ? JSON.parse(saved) : [{ role: "system", content: "Hola, soy el asistente de Team Bingo. ¿En qué te ayudo?" }];
  });
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef();

  useEffect(() => {
    sessionStorage.setItem("chat.history", JSON.stringify(messages));
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e) {
    e?.preventDefault();
    if (!text.trim()) return;
    const userMsg = { role: "user", content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setText("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim(), history: messages.slice(-6) }) // send last 6 msgs as context
      });
      if (!res.ok) throw new Error("Error en el servidor");
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "Lo siento, ha ocurrido un error. Intenta de nuevo." }]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-4 flex flex-col h-[70vh]">
      <div className="flex-1 overflow-auto mb-3">
        {messages.map((m, i) => (
          <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-3 rounded-lg ${m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-black"}`}>
              {m.content}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Escribe un mensaje..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded" type="submit" disabled={loading}>
          {loading ? "..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
 