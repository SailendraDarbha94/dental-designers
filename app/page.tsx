import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="mt-16 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title({ color: "violet" })}>Track your Wins</h1>
        <br />
        <h1 className={title({ color: "blue" })}>the fun way</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Unlock new insights into your On-Field performance
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "solid",
          })}
          href={siteConfig.links.signUp}
        >
          Create Account
        </Link>
        <Link
          className={buttonStyles({
            color: "secondary",
            radius: "full",
            variant: "flat",
          })}
          href={siteConfig.links.signIn}
        >
          Login
        </Link>
        <Link
          isExternal
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
            color: "secondary",
          })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
