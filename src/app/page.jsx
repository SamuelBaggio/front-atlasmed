import NavBar from "@/components/NavBar";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="m-10">
        <div className="flex mx-32">
          <div className="w-6/12">
            <Image
              className="rounded"
              src={
                "data:image/jpeg;base64,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"
              }
              width={2000}
              height={2000}
            ></Image>
          </div>
          <div className="w-6/12 ml-10 mt-16 text-center items-center">
            <button className="bg-sky-200 hover:bg-sky-300 text-black font-bold py-4 w-8/12 border border-slate rounded-lg">
              <Link href="/pacientes">Ver Pacientes</Link>
            </button>
            <button className="mt-10 bg-sky-200 hover:bg-sky-300 text-black font-bold py-4 w-8/12 border border-slate rounded-lg">
              <Link href="/consultas">Ver Consultas</Link>
            </button>
            <button className="mt-10 bg-sky-200 hover:bg-sky-300 text-black font-bold py-4 w-8/12 border border-slate rounded-lg">
              <Link href="/perfilMedico">Ver Perfil</Link>
            </button>
          </div>
        </div>
        <div className="mx-10 mt-10">
          <h2 className=" mt-4 font-bold leading-tight text-2xl">
            {" "}
            Atlas MED: Uma nova saúde.{" "}
          </h2>
          <div className=" text-justify">
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              esse explicabo ut eaque voluptatum rem necessitatibus. Inventore,
              ex repudiandae maiores natus sed officiis eveniet! Accusamus, ea
              nisi illo in explicabo error esse praesentium laboriosam minus
              perferendis iste? Odio deserunt, sunt error, laborum nesciunt,
              ipsa reiciendis sit doloribus consectetur quos non.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis
              dolor nostrum cum? Expedita optio ut omnis amet veritatis
              obcaecati. para casa elegante ou até mesmo presentes exclusivos,
              você está no lugar certo.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              atque aliquam, tenetur mollitia molestias quae. Magni aspernatur
              asperiores deleniti sunt, dolorum quae nobis. Rem quas voluptatum
              tempore alias necessitatibus deleniti delectus error earum
              corporis sapiente obcaecati dolorum aliquam dolorem, voluptatem
              neque eaque harum blanditiis libero! Ad porro suscipit molestiae,
              vero vitae quisquam iure. Atque laudantium corporis voluptate
              aliquam consectetur eum explicabo harum optio, repudiandae sit
              voluptas.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
