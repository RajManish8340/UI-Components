import { IconBrandGithub, IconBrandTwitter, IconMoon } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
        }}
      />
      <div className="absolute inset-0">

        <nav className="w-full flex justify-between items-center p-6 pt-7 sm:justify-around px-6 sm:px-6 lg:px-50">
          <div className="text-white font-bold text-xl">SaundaryaUI</div>
          <div className="flex items-center gap-7">
            <a className="cursor-pointer">
              <IconBrandTwitter stroke={1.5} className="h-7 w-7" />
            </a>
            <a className="cursor-pointer">
              <IconBrandGithub stroke={1.5} className="h-7 w-7" />
            </a>
            <a className="cursor-pointer p-2 border border-taupe-700 rounded-lg">
              <IconMoon stroke={1.5} className="h-5 w-5" />
            </a>
          </div>
        </nav>

        <div>
          <div className=" w-[70vh] mx-auto flex flex-col items-center pt-15">
            <h1 className="text-6xl font-medium pb-2 tracking-tight">Modern UI </h1>
            <h2 className="text-4xl pb-10 text-neutral-200"> Created with Care and Craft</h2>
            <h4 className="text-xl text-center text-neutral-"> prfession-grade modern components and templates which makes your UI tastefull , and
              simple to integrate .
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
