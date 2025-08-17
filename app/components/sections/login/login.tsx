import type { FC } from "react";

export const LoginSection: FC = () => (
  <section className="p-2">
    <div className="hidden md:flex md:gap-x-[30px]">
      <div className="w-[711px] h-[992px]">
        <img
          src="/images/login-reg-card.svg"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        ></img>
      </div>
      <div className=" flex flex-col w-[711px] h-[992px] shadow-2xl rounded-3xl relative">
        <div className="flex justify-end">
          <div className="flex bg-[#F27F20] items-center justify-center w-[186px] h-[60px] rounded-br-sm rounded-bl-3xl rounded-tl-sm rounded-tr-3xl text-white text-3xl font-bold font-display ">
            <div>Login</div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[40px]">
          <img src="/images/logo-dark.svg" className="w-[293px] h-[100px]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 mt-[49.95px]">
          <div className="flex flex-col">
            <div className="text-xs text">Email</div>
            <input
              placeholder="yourmail@example.com"
              type="input"
              className="border border-slate-400 rounded-sm bg-slate-50  w-[611px] h-[60px] text-[#909090] pl-4 text-[24px]"
            ></input>
          </div>
          <div className="flex flex-col mt-[30px]">
            <div className="text-xs text">Password</div>
            <input
              type="password"
              className="border rounded-sm bg-gray-50 border-gray w-[611px] h-[60px] text-[#909090] pl-4 text-[24px]"
            ></input>
          </div>
          <button className="bg-[#224083] w-[611px] h-[60px] font-sans  rounded-sm text-white font-semibold text-2xl mt-[30px]">
            Login to Your Account
          </button>
          <div className="flex items-center w-[611px] h-[36px] mt-[65px]">
            <div className="flex-grow border-t border-[#C4C4C4]"></div>
            <span className="px-4 text-[#C4C4C4]">or</span>
            <div className="flex-grow border-t border-[#C4C4C4]"></div>
          </div>
          <div className="flex justify-between w-[611px]  mt-[65px] ">
            <div className="flex w-[296px] h-[70px] items-center justify-center gap-x-2 bg-[#F1F1F1] rounded-sm">
              <img
                src="/images/google-logo.svg"
                className="w-[30px] h-[30px]"
              ></img>
              <div>Continue with Google</div>
            </div>
            <div className="flex w-[296px] h-[70px] items-center justify-center gap-x-2 bg-[#F1F1F1] rounded-sm">
              <img
                src="/images/github-logo.svg"
                className="w-[30px] h-[30px]"
              ></img>
              <div>Continue with Github</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-[14px] mt-[68px]">
            <div className="">By creating this account you agree to our</div>
            <div>
              {" "}
              <a
                href="https://pycon.id/code-of-conduct"
                target="_blank"
                className="underline text-blue-950 "
              >
                Code of Conduct
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="absolute bottom-[10.9px] right-[10.9px]">
          <img src="/images/trigger-dark-mode.svg"></img>
        </div>
      </div>
    </div>
  </section>
);
