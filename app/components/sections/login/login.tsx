import type { FC } from "react";

export const LoginSection: FC = () => (
  <section className="p-2">
    <div className="flex gap-x-[30px] items-center">
      <div className="hidden lg:block lg:w-1/2 h-[992px]">
        <img
          alt="login and registration left card"
          src="/images/login-reg-card.svg"
          className="w-full h-full object-cover rounded-3xl shadow-2xl"
        ></img>
      </div>
      <div className="w-full lg:w-1/2 h-[992px]">
        <div className="flex flex-col shadow-2xl rounded-3xl relative w-full h-full">
          <div className="flex justify-end">
            <div className="w-[185px] h-[60px]">
              <div className="flex bg-[#F27F20] items-center justify-center rounded-br-sm rounded-bl-3xl rounded-tl-sm rounded-tr-3xl ">
                <div className="text-white font-bold font-display text-3xl">
                  Login
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-[40px]">
            <img alt="pycon id dark logo" src="/images/logo-dark.svg" className="w-[293px] h-[100px]" />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-2 mt-[29.95px] p-2">
            <div className="flex flex-col">
              <div className="text-xs text">Email</div>
              <input
                placeholder="yourmail@example.com"
                type="input"
                className="border border-black/15 rounded-sm bg-[#F1F1F1] w-[300px]  sm:w-[484px] xl:w-[607px]  h-[60px] text-[#909090] pl-4 text-[24px]"
              ></input>
            </div>
            <div className="flex flex-col mt-[30px]">
              <div className="text-xs text">Password</div>

              <input
                type="password"
                className="border rounded-sm bg-[#F1F1F1] border-black/15 text-[#909090] w-[300px]  sm:w-[484px] xl:w-[607px]  h-[60px]  pl-4 text-[24px]"
              ></input>
            </div>
            <button type="button" className="bg-[#224083] w-[300px]  sm:w-[484px] xl:w-[607px] h-[60px] font-sans  rounded-sm text-white font-semibold text-2xl mt-[30px]">
              Login to Your Account
            </button>
            <div className="flex items-center w-[300px]  sm:w-[484px] xl:w-[607px] h-[36px] mt-[65px]">
              <div className="flex-grow border-t border-[#C4C4C4]"></div>
              <span className="px-4 text-[#C4C4C4]">or</span>
              <div className="flex-grow border-t border-[#C4C4C4]"></div>
            </div>
            <div className="flex justify-between gap-x-2 w-[300px]  sm:w-[484px] xl:w-[607px] mt-[65px] ">
              <div className="flex w-[170px] sm:w-[236px]  xl:w-[296px] h-[70px] items-center justify-center gap-x-2 bg-[#F1F1F1] rounded-sm p-2">
                <img
                  alt="google logo"
                  src="/images/google-logo.svg"
                  className="w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]"
                ></img>
                <div>Continue with Google</div>
              </div>
              <div className="flex w-[170px] sm:w-[236px]  xl:w-[296px] h-[70px] items-center justify-center gap-x-2 bg-[#F1F1F1] rounded-sm p-2">
                <img
                  alt="github log"
                  src="/images/github-logo.svg"
                  className="w-[15px] h-[15px] sm:w-[30px] sm:h-[30px]"
                ></img>
                <div>Continue with Github</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-[14px] mt-[78px]">
              <div className="">By creating this account you agree to our</div>
              <div>
                {" "}
                <a
                  href="https://pycon.id/code-of-conduct"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline text-blue-950 "
                >
                  Code of Conduct
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="absolute bottom-[10.9px] right-[10.9px]">
            <img alt="" src="/images/trigger-dark-mode.svg"></img>
          </div>
        </div>
      </div>
    </div>
  </section>
);
