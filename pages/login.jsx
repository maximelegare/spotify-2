import React from "react";
import { getProviders, signIn } from "next-auth/react";
import { useEffect } from "react";

function Login({ providers }) {
  useEffect(() => {
    console.log(providers);
  }, [providers]);

  return (
    <div className="flex flex-col justify-center items-center w-full bg-black min-h-screen">
      <img className="w-24 mb-7" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] px-3 py-1 rounded-full font-medium"
            onClick={()=> signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
