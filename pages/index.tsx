import { useMail } from "../hooks/useMail";

export default function Mail() {
  const { setName, setMessage, setEmail, send } = useMail();

  return (
    <form>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="タイトル"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="アドレス"
      />
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="お問合せ内容"
      />
      <button type="button" onClick={send}>
        Send
      </button>
    </form>
  );
}
