import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { button as buttonStyles } from "@heroui/theme";
import { Code } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-xl text-center justify-center">
                <span className={title({ color: "violet" })}>VulnLabs&nbsp;</span>
                <br />
                <span className={title()}>漏洞复现平台</span>
                <div className={subtitle({ class: "mt-4" })}>
                    用于可视化搭建Vulhub漏洞场景的复现平台
                </div>
            </div>

            <div className="flex gap-3 mt-5">
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

            <div className="flex flex-wrap gap-4 mt-10">
                <Snippet color="primary" variant="bordered">
                    git clone git@github.com:BlkSword/VulnLabs.git
                </Snippet>
            </div>
        </section>
    );
}