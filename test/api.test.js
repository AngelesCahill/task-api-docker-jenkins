import supertest from "supertest";
import app from "../server.js";

const request = supertest(app);

describe("API Tests", () => {
  it("GET /tasks - Obtener todas las tareas", async () => {
    const res = await request.get("/tasks");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true); // Verifica que la respuesta sea un array
    expect(res.body.length).toBeGreaterThan(0); // Verifica que el array no esté vacío
  });

  it("GET /tasks/1 - Buscar una tarea por ID", async () => {
    const res = await request.get("/tasks/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", 1); // Verifica que la tarea tenga el ID correcto
    expect(res.body).toHaveProperty("tarea"); // Verifica que la tarea tenga la propiedad 'tarea'
  });
});