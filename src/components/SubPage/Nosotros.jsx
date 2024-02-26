/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cMZznUjNLNG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <>
        <div className="w-full bg-gray-50 py-12 lg:py-24">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We're on a mission to make the web accessible to everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full py-12 lg:py-24">
          <div className="container grid items-start gap-4 px-4 md:px-6 lg:gap-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:gap-4">
                <div className="inline-flex rounded-full border border-gray-200 border-gray-200 overflow-hidden dark:border-gray-800">
                  <img
                    alt="Team member"
                    className="object-cover w-100 h-100"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Alice Jones</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:gap-4">
                <div className="inline-flex rounded-full border border-gray-200 border-gray-200 overflow-hidden dark:border-gray-800">
                  <img
                    alt="Team member"
                    className="object-cover w-100 h-100"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Bob Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:gap-4">
                <div className="inline-flex rounded-full border border-gray-200 border-gray-200 overflow-hidden dark:border-gray-800">
                  <img
                    alt="Team member"
                    className="object-cover w-100 h-100"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Ella Davis</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Designer</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:gap-4">
                <div className="inline-flex rounded-full border border-gray-200 border-gray-200 overflow-hidden dark:border-gray-800">
                  <img
                    alt="Team member"
                    className="object-cover w-100 h-100"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Charlie Brown</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  