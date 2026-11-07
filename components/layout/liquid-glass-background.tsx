export function LiquidGlassBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ============================================================ */}
      {/* MODO CLARO: Predominantemente blanco, fresco y con azules muy sutiles */}
      {/* ============================================================ */}
      <div className="absolute inset-0 opacity-100 dark:opacity-0 transition-opacity duration-700 ease-in-out">
        {/* Base blanca limpia con sutil gradación aperlada */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#fbfcfe] to-[#f5f8fc]" />

        {/* Luz 1: Toque muy suave de azul cielo pálido (arriba a la izquierda) */}
        <div
          className="absolute -top-32 -left-20 sm:-top-24 sm:left-[2%] 
          w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(219,234,254,0.42)_0%,rgba(224,242,254,0.18)_45%,transparent_70%)] 
          blur-[60px] sm:blur-[85px]"
        />

        {/* Luz 2: Toque hielo/azul ultra suave (arriba a la derecha) */}
        <div
          className="absolute top-[12%] -right-24 sm:top-[8%] sm:right-[4%] 
          w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(191,219,254,0.30)_0%,rgba(239,246,255,0.16)_50%,transparent_70%)] 
          blur-[65px] sm:blur-[90px]"
        />

        {/* Luz 3: Reflejo sutil azul cristalino (abajo a la izquierda) */}
        <div
          className="absolute top-[55%] -left-28 sm:top-[50%] sm:left-[6%] 
          w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(224,242,254,0.28)_0%,transparent_65%)] 
          blur-[60px] sm:blur-[85px]"
        />

        {/* Luz 4: Brillo perla / blanco luminoso central para mantener la claridad */}
        <div
          className="absolute top-[22%] left-1/2 -translate-x-1/2 
          w-[380px] sm:w-[680px] h-[450px] sm:h-[650px] rounded-full 
          bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.88)_0%,rgba(240,246,255,0.25)_55%,transparent_75%)] 
          blur-[50px]"
        />

        {/* Sutil viñeta clara */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(240,245,252,0.35)_100%)]" />
      </div>

      {/* ============================================================ */}
      {/* MODO OSCURO: Azul e Índigo Profundo (Deep Midnight Sapphire) */}
      {/* ============================================================ */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-700 ease-in-out">
        {/* Base azul noche / midnight obsidian profunda */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060810] via-[#090d18] to-[#04060b]" />

        {/* Luz 1: Índigo profundo / Sapphire radiante (arriba a la izquierda) */}
        <div
          className="absolute -top-32 -left-20 sm:-top-24 sm:left-[3%] 
          w-[580px] h-[580px] sm:w-[750px] sm:h-[750px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.32)_0%,rgba(67,56,202,0.18)_45%,transparent_70%)] 
          blur-[60px] sm:blur-[90px]"
        />

        {/* Luz 2: Azul eléctrico / Cobalto nocturno (arriba a la derecha) */}
        <div
          className="absolute top-[14%] -right-24 sm:top-[10%] sm:right-[3%] 
          w-[520px] h-[520px] sm:w-[700px] sm:h-[700px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.30)_0%,rgba(37,99,235,0.16)_45%,transparent_70%)] 
          blur-[65px] sm:blur-[95px]"
        />

        {/* Luz 3: Cian profundo / Océano medianoche (centro/abajo a la izquierda) */}
        <div
          className="absolute top-[52%] -left-28 sm:top-[48%] sm:left-[5%] 
          w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.26)_0%,rgba(79,70,229,0.15)_45%,transparent_70%)] 
          blur-[60px] sm:blur-[90px]"
        />

        {/* Luz 4: Azul bígaro / Índigo celestial suave (abajo a la derecha) */}
        <div
          className="absolute -bottom-16 right-[2%] sm:bottom-[-4%] sm:right-[8%] 
          w-[450px] h-[450px] sm:w-[620px] sm:h-[620px] rounded-full 
          bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.28)_0%,rgba(99,102,241,0.14)_50%,transparent_70%)] 
          blur-[60px] sm:blur-[90px]"
        />

        {/* Centro: Resplandor sutil índigo central */}
        <div
          className="absolute top-[32%] left-1/2 -translate-x-1/2 
          w-[320px] sm:w-[580px] h-[450px] sm:h-[650px] rounded-full 
          bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.10)_0%,transparent_70%)] 
          blur-[55px]"
        />

        {/* Viñeta oscura suave para contraste */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(2,4,10,0.55)_100%)]" />
      </div>

      {/* Brillo sutil superior de cristal (estático y súper ligero) */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/20 dark:from-white/[0.04] to-transparent" />
    </div>
  );
}
