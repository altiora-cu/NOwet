'use client';

export function BotonEscuchar({ texto }: { texto: string }) {
  function escuchar() {
    try {
      if (!('speechSynthesis' in window)) return;
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'es-PE';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } catch {
      // Si el navegador no soporta SpeechSynthesis, simplemente no pasa nada.
    }
  }

  return (
    <button
      type="button"
      onClick={escuchar}
      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-turquesa-aa hover:text-turquesa-900"
    >
      🔊 Escuchar
    </button>
  );
}
