import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>VulnLabs&nbsp;</span>
        <span className={title({ color: "violet" })}>Vulhub&nbsp;</span>
        <br />
        <span className={title()}>漏洞复现与学习平台</span>
        <div className={subtitle({ class: "mt-4" })}>
          专注于Vulhub漏洞场景的复现演示与学习资料整合
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
          href="/vulns"
        >
          查看漏洞列表
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
