import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin")({
  component: Admin,
});

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    setUser(data.user);
  }


  async function logout() {
    await supabase.auth.signOut();
    setUser(null);
  }


  async function loadProducts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("brand");

    if (!error) {
      setProducts(data || []);
    }

    setLoading(false);
  }


  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        setUser(data.user);
        loadProducts();
      }
    });
  }, []);


  if (!user) {
    return (
      <div className="mx-auto max-w-md px-6 pt-40">

        <h1 className="text-3xl font-bold">
          Админка Mobile Store
        </h1>

        <div className="mt-8 grid gap-4">

          <input
            className="rounded-xl border p-3"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            className="rounded-xl border p-3"
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="rounded-xl bg-black px-5 py-3 text-white"
          >
            Войти
          </button>

        </div>

      </div>
    );
  }


  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Товары
        </h1>

        <button
          onClick={logout}
          className="rounded-full border px-5 py-2"
        >
          Выйти
        </button>

      </div>


      <button
        onClick={loadProducts}
        className="mt-8 rounded-full bg-black px-6 py-3 text-white"
      >
        Обновить
      </button>


      {loading ? (
        <p className="mt-10">
          Загрузка...
        </p>
      ) : (

      <div className="mt-10 grid gap-4">

        {products.map(product => (

          <div
            key={product.id}
            className="rounded-2xl bg-secondary p-5"
          >

            <div className="flex justify-between">

              <div>
                <p className="text-sm opacity-60">
                  {product.brand}
                </p>

                <h2 className="text-xl font-bold">
                  {product.name}
                </h2>

                <p>
                  {product.price} ₽
                </p>
              </div>


              <button
                onClick={async()=>{

                  await supabase
                    .from("products")
                    .delete()
                    .eq("id", product.id);

                  loadProducts();

                }}
                className="text-red-600"
              >
                Удалить
              </button>

            </div>

          </div>

        ))}

      </div>

      )}

    </div>
  );
}