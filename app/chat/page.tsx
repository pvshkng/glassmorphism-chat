export default function Chat() {
  /* prettier-ignore */
  const messages = [
    { type: "ai", message: "Hi, I am Chitty Chatty Face. How can I help you?" },
    { type: "user", message: "Yo, what are you?", },
    { type: "ai", message: "I am an AI assistant built by Puvish. How can I assist you today??" },
    { type: "user", message: "Write some long long text no more than 1000 words. Imma test some scrolling logic and some functions.", },
    { type: "ai", message: "Sure! Here's a long text for you: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi mauris at justo. Nulla facilisi. Sed sit amet mi vel nunc lacinia, sed viverra est. Sed euismod, nulla a posuere malesuada, ipsum purus feugiat urna, quis convallis nisi", },
  ];

  return (
    <>
      <div className="relative">
        {/* Background Element */}
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#ffffff] to-[#d6d6d6]" />

        {/* Chat Element */}
        <div className="relative flex flex-col h-screen w-screen overflow-y-auto overflow-x-hidden">
          {/* Message Wrapper */}
          <div className="mx-auto px-[30px] py-16 bg-transparent md:w-[800px] h-auto text-black">
            {/* Message Area */}
            <div className={"mt-10 mb-[175px] h-screen"} id="msgArea">
              {/* Messages */}
              {messages.map((m) => (
                <p
                  className={`break-words text-sm text-black 
                ${
                  m.type == "ai"
                    ? "text-left clear-none"
                    : "text-right clear-both"
                }`}
                >
                  <span
                    className={`relative inline-block leading-6 p-2 max-w-[80%] transition-[float] rounded-2xl mx-2 my-3
                      ${
                        m.type == "ai"
                          ? "bg-[#ADADAD] rounded-bl-[0]"
                          : "bg-[#FFFFFF] rounded-br-[0]"
                      }`}
                  >
                    {m.loading == true ? <div className="loader" /> : m.message}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="z-[3] flex absolute bottom-0 items-center justify-center w-full">
          {/* User Input */}
          <div className="z-[2] flex py-3 my-10 mx-5 rounded-2xl border-2 border-gray-200 bg-white text-black w-full max-w-[750px] ">
            {/* shadow-[-3px_-3px_10px_#CAF4FF,3px_3px_10px_#E1AFD1] */}
            <input
              placeholder="ask away my dude"
              className="mx-10 w-[80%] h-full bg-transparent outline-none break-words break-all"
            />
          </div>

          {/* Pseudo Blur */}
          <div className="z-[1] absolute bottom-0 left-0 right-0 mx-auto backdrop-blur-md mask-gradient-y mask-repeat-y max-w-[1000px] h-[150px] subtract-scrollbar-width"></div>
        </div>
      </div>
    </>
  );
}
