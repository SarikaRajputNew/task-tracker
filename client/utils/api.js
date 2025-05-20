export async function getTasks() {
  const res = await fetch("http://localhost:4000/tasks");
  const data = await res.json();
  return data;
}
