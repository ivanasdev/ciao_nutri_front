import { useState } from "react";

function BuscadorAlimentos() {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  // Nuevo estado para filtros
  const [useFilter, setUseFilter] = useState(false);
  const [filtros, setFiltros] = useState({
    energia: "",
    proteina: "",
    lipidos: "",
    h_carbono: "",
  });

  const buscarAlimentos = async () => {
    setLoading(true);
    let url = "";
    let body = {};

    if (!useFilter) {
      if (query.length < 2) return;
      url = "http://127.0.0.1:8699/buscador_api/buscar";
      body = { query };
    } else {
      url = "http://127.0.0.1:8699/buscador_api/buscar_filter";
      body = filtros;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setResultados(data.resultados || []);
    } catch (error) {
      console.error("Error buscando alimentos", error);
    }

    setLoading(false);
  };

  return (
    <div className="buscador-container">
      <h1 className="header-title-bus">Ciao Planner 🥗</h1>

      {/* 🔥 Switch para activar filtros */}
      <label style={{ marginBottom: 10, display: "flex", gap: 8, alignItems: "center" }}>
        <input type="checkbox" checked={useFilter} onChange={() => setUseFilter(!useFilter)} />
        Activar Filtros Avanzados
      </label>

      {/* Si filtros están activos se muestran campos */}
      {useFilter && (
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <input type="number" placeholder="Energía (Kcal)" value={filtros.energia}
            onChange={(e) => setFiltros({ ...filtros, energia: e.target.value })} />

          <input type="number" placeholder="Proteína (g)" value={filtros.proteina}
            onChange={(e) => setFiltros({ ...filtros, proteina: e.target.value })} />

          <input type="number" placeholder="Lípidos (g)" value={filtros.lipidos}
            onChange={(e) => setFiltros({ ...filtros, lipidos: e.target.value })} />

          <input type="number" placeholder="Carbohidratos (g)" value={filtros.h_carbono}
            onChange={(e) => setFiltros({ ...filtros, h_carbono: e.target.value })} />
        </div>
      )}

      {/* Buscador normal cuando filtro está apagado */}
      {!useFilter && (
        <div style={{ display: "flex", gap: 10 }}>
          <input
            type="text"
            className="search-input01"
            placeholder="Buscar alimento..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && buscarAlimentos()}
          />

          <button onClick={buscarAlimentos} className="btn-buscar">🔍 Buscar</button>
        </div>
      )}

      {useFilter && (
        <button onClick={buscarAlimentos} className="btn-buscar" style={{ marginTop: 8 }}>
          🔎 Buscar con Filtros
        </button>
      )}

      {loading && <p className="loading">⌛ Buscando...</p>}

      {/* TABLA */}
      {resultados.length > 0 && (
        <table className="tabla-alimentos">
          <thead>
            <tr>
              <th>Alimento</th>
              <th>Kcal</th>
              <th>Proteína</th>
              <th>HC</th>
              <th>Lípidos</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {resultados.map((item) => (
              <tr key={item.id}>
                <td><strong>{item.alimento}</strong></td>
                <td>{item.st_energia_kcal || "-"}</td>
                <td>{item.st_proteina_g || "-"}</td>
                <td>{item.st_hidratos_de_carbono_g || "-"}</td>
                <td>{item.st_lipidos_g || "-"}</td>

                <td style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => alert("Detalles de " + item.alimento)}>🔍 Detalles</button>
                  <button onClick={() => console.log("Seleccionado:", item)}>✔ Seleccionar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BuscadorAlimentos;
