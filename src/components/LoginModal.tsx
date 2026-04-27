export const LoginModal = () => {
  return (
    <div className="box-border caret-transparent hidden outline-[3px] break-words">
      <div className="box-border caret-transparent outline-[3px] break-words">
        <div className="box-border caret-transparent outline-[3px] break-words">
          <span className="text-[28px] box-border caret-transparent leading-[48px] outline-[3px] break-words mb-10">
            Sign in
          </span>
          <span className="box-border caret-transparent outline-[3px] break-words">
            <a
              href="https://demo2.pavothemes.com/printec/my-account/"
              title="Register"
              className="text-black box-border caret-transparent outline-[3px] break-words"
            >
              Create an Account
            </a>
          </span>
        </div>
        <form className="box-border caret-transparent outline-[3px] break-words mb-[22.652px]">
          <p className="box-border caret-transparent outline-[3px] break-words mb-3.5">
            <label className="box-border caret-transparent outline-[3px] break-words">
              Username or email{" "}
              <span className="text-red-600 box-border caret-transparent outline-[3px] break-words">
                *
              </span>
            </label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="appearance-none text-black text-[13px] box-border caret-transparent leading-5 break-words border px-[25px] py-4 rounded-[30px] border-solid border-white"
            />
          </p>
          <p className="box-border caret-transparent outline-[3px] break-words mb-3.5">
            <label className="box-border caret-transparent outline-[3px] break-words">
              Password{" "}
              <span className="text-red-600 box-border caret-transparent outline-[3px] break-words">
                *
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="appearance-none text-black text-[13px] box-border caret-transparent leading-5 break-words border px-[25px] py-4 rounded-[30px] border-solid border-white"
            />
          </p>
          <button
            type="submit"
            className="appearance-none text-white font-semibold bg-violet-700 caret-transparent outline-[3px] break-words text-center px-[30px] py-[15px] rounded-[30px]"
          >
            Login
          </button>
          <input
            type="hidden"
            name="action"
            value="printec_login"
            className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] break-words p-0"
          />
          <input
            type="hidden"
            name="security-login"
            value="3f7659acb8"
            className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] break-words p-0"
          />
          <input
            type="hidden"
            name="_wp_http_referer"
            value="/printec/home-7/"
            className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] break-words p-0"
          />
        </form>
        <div className="box-border caret-transparent outline-[3px] break-words">
          <a
            href="https://demo2.pavothemes.com/printec/my-account/lost-password/"
            title="Lost your password?"
            className="text-black box-border caret-transparent outline-[3px] break-words"
          >
            Lost your password?
          </a>
        </div>
      </div>
    </div>
  );
};
